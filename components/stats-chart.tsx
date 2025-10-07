"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const fetchStats = async (): Promise<StatsData | null> => {
  try {
    const baseUrl =
      typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/fetch-umami-stats`);
    
    if (!res.ok) {
      console.warn("Failed to fetch stats, using dummy data:", res.status, res.statusText);
      return getDummyData();
    }
    
    const data = await res.json();
    console.log("Stats data received:", data);

    // Only process if we have valid data
    if (data && typeof data === 'object' && !data.error) {
      // Calculate average visit duration in seconds (with safety checks)
      const averageVisitDurationSeconds = 
        data?.totaltime?.value && data?.visits?.value 
          ? data.totaltime.value / data.visits.value 
          : 0;

      // Convert average visit duration to minutes
      const averageVisitDurationMinutes = averageVisitDurationSeconds / 60;

      // Store the average visit duration in minutes
      if (data?.totaltime) {
        data.totaltime.value = averageVisitDurationMinutes;
        data.totaltime.prev = (data.totaltime.prev || 0) / 60;
      }
      
      return data;
    }
    
    console.warn("Invalid data structure, using dummy data:", data);
    return getDummyData();
  } catch (error) {
    console.warn("Error fetching stats, using dummy data:", error);
    return getDummyData();
  }
};

const getDummyData = (): StatsData => {
  return {
    pageviews: { value: 150, prev: 120 },
    visitors: { value: 120, prev: 95 },
    visits: { value: 140, prev: 110 },
    bounces: { value: 50, prev: 45 },
    totaltime: { value: 29, prev: 25 }, // in minutes
  };
};

type StatsData = {
  pageviews: { value: number; prev: number };
  visitors: { value: number; prev: number };
  visits: { value: number; prev: number };
  bounces: { value: number; prev: number };
  totaltime: { value: number; prev: number }; // now in minutes
};

type UmamiStatsProps = {
  stats: StatsData;
};

const UmamiStats: React.FC<UmamiStatsProps> = ({ stats }) => {
  return stats.pageviews.value;
};

const chartConfig = {
  visitor_stats: {
    label: "Visitors",
  },
  pageviews: {
    label: "Page Views",
    color: "hsl(var(--chart-1))",
  },
  visitors: {
    label: "Users",
    color: "hsl(var(--chart-2))",
  },
  visits: {
    label: "Visits",
    color: "hsl(var(--chart-3))",
  },
  bounces: {
    label: "Bounces",
    color: "hsl(var(--chart-4))",
  },
  totaltime: {
    label: "Avarege Time",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function StatsChart() {
  const [stats, setStats] = useState<StatsData | null>(null);

  useEffect(() => {
    const getStats = async () => {
      const stats = await fetchStats();
      setStats(stats);
    };

    getStats();
  }, []);

  const chartData = React.useMemo(() => {
    if (!stats) return [];
    return [
      {
        type: "pageviews",
        visitors: stats.pageviews?.value || 0,
        fill: "var(--color-pageviews)",
      },
      {
        type: "visitors",
        visitors: stats.visitors?.value || 0,
        fill: "var(--color-visitors)",
      },
      {
        type: "visits",
        visitors: stats.visits?.value || 0,
        fill: "var(--color-visits)",
      },
      {
        type: "bounces",
        visitors: stats.bounces?.value || 0,
        fill: "var(--color-bounces)",
      },
      {
        type: "totaltime",
        visitors: stats.totaltime?.value || 0,
        fill: "var(--color-totaltime)",
      },
    ];
  }, [stats]);

  if (!stats) {
    return <div className="flex items-center justify-center h-full">
      <LoaderCircle className="animate-spin" />
    </div>;
  }

  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <ChartContainer config={chartConfig} className="">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="type"
          innerRadius={70}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-5xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground "
                    >
                      Visits
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
