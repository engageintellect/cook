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

const fetchStats = async (): Promise<StatsData> => {
  const baseUrl =
    typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/fetch-umami-stats`);
  const data = await res.json();
  console.log("data is:", data);

  // Calculate average visit duration in seconds
  const averageVisitDurationSeconds = data.totaltime.value / data.visits.value;

  // Convert average visit duration to minutes
  const averageVisitDurationMinutes = averageVisitDurationSeconds / 60;

  // Store the average visit duration in minutes
  data.totaltime.value = averageVisitDurationMinutes;
  data.totaltime.prev = data.totaltime.prev / 60; // Assuming prev is also in seconds

  return data;
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
        visitors: stats.pageviews.value,
        fill: "var(--color-pageviews)",
      },
      {
        type: "visitors",
        visitors: stats.visitors.value,
        fill: "var(--color-visitors)",
      },
      {
        type: "visits",
        visitors: stats.visits.value,
        fill: "var(--color-visits)",
      },
      {
        type: "bounces",
        visitors: stats.bounces.value,
        fill: "var(--color-bounces)",
      },
      {
        type: "totaltime",
        visitors: stats.totaltime.value,
        fill: "var(--color-totaltime)",
      },
    ];
  }, [stats]);

  if (!stats) {
    return <div className="flex items-center justify-center h-full"></div>;
  }

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
                      {chartData[0].visitors}
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
