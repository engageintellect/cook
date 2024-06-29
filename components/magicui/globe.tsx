"use client";

import { cn } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.41,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 64000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0, 0, 0],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 }, // Manila
    { location: [19.076, 72.8777], size: 0.1 }, // Mumbai
    { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo
    { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City
    { location: [40.7128, -74.006], size: 0.1 }, // New York City
    { location: [34.6937, 135.5022], size: 0.05 }, // Osaka
    { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul
    { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles
    { location: [30.2672, -97.7431], size: 0.06 }, // Austin, Texas
    { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco
    { location: [21.3069, -157.8583], size: 0.05 }, // Honolulu, Hawaii
    { location: [35.6895, 139.6917], size: 0.08 }, // Tokyo
    { location: [48.8566, 2.3522], size: 0.07 }, // Paris
    { location: [59.3293, 18.0686], size: 0.05 }, // Stockholm, Sweden
    { location: [46.2044, 6.1432], size: 0.05 }, // Geneva, Switzerland
    { location: [22.3193, 114.1694], size: 0.07 }, // Hong Kong
    { location: [41.9028, 12.4964], size: 0.06 }, // Rome
    { location: [25.7617, -80.1918], size: 0.07 }, // Miami, Florida
    { location: [43.6532, -79.3832], size: 0.07 }, // Toronto, Canada
    { location: [49.2827, -123.1207], size: 0.07 }, // Vancouver, Canada
    { location: [61.2181, -149.9003], size: 0.05 }, // Anchorage, Alaska
    { location: [52.52, 13.405], size: 0.06 }, // Berlin
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [40.4173, -82.9071], size: 0.05 }, // Ohio
    { location: [38.5976, -80.4549], size: 0.05 }, // West Virginia
    { location: [38.9072, -77.0369], size: 0.07 }, // Washington, D.C.
    { location: [42.3601, -71.0589], size: 0.06 }, // Boston, Massachusetts
    { location: [39.7392, -104.9903], size: 0.06 }, // Denver, Colorado
    { location: [47.6062, -122.3321], size: 0.06 }, // Seattle
    { location: [37.5665, 126.978], size: 0.07 }, // Seoul, South Korea
    { location: [26.8206, 30.8025], size: 0.07 }, // Egypt
    { location: [25.276987, 55.296249], size: 0.07 }, // Dubai
    { location: [51.5074, -0.1278], size: 0.07 }, // London
    { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
    { location: [64.9631, -19.0208], size: 0.05 }, // Iceland
    { location: [41.8781, -87.6298], size: 0.07 }, // Chicago
    { location: [40.4168, -3.7038], size: 0.07 }, // Madrid
    { location: [55.7558, 37.6173], size: 0.07 }, // Moscow, Russia
    { location: [35.6762, 139.6503], size: 0.07 }, // Tokyo, Japan
    { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires, Argentina
    { location: [37.9838, 23.7275], size: 0.06 }, // Athens, Greece
    { location: [28.6139, 77.209], size: 0.07 }, // New Delhi, India
    { location: [45.4642, 9.19], size: 0.07 }, // Milan, Italy
    { location: [50.1109, 8.6821], size: 0.07 }, // Frankfurt, Germany
    { location: [35.8617, 104.1954], size: 0.07 }, // China
    { location: [31.2304, 121.4737], size: 0.08 }, // Shanghai, China
    { location: [48.2082, 16.3738], size: 0.06 }, // Vienna, Austria
    { location: [50.8503, 4.3517], size: 0.06 }, // Brussels, Belgium
    { location: [45.4215, -75.6972], size: 0.07 }, // Ottawa, Canada
    { location: [55.8642, -4.2518], size: 0.06 }, // Glasgow, Scotland
    { location: [31.7683, 35.2137], size: 0.07 }, // Jerusalem, Israel
    { location: [-22.9068, -43.1729], size: 0.07 }, // Rio de Janeiro, Brazil
    { location: [35.6895, 139.6917], size: 0.08 }, // Tokyo, Japan
    { location: [25.0343, -77.3963], size: 0.06 }, // Nassau, Bahamas
    { location: [22.3964, 114.1095], size: 0.07 }, // Hong Kong
    { location: [3.139, 101.6869], size: 0.07 }, // Kuala Lumpur, Malaysia
    { location: [-1.2921, 36.8219], size: 0.06 }, // Nairobi, Kenya
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
    { location: [32.7767, -96.797], size: 0.06 }, // Dallas, Texas
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
    { location: [-37.8136, 144.9631], size: 0.07 }, // Melbourne, Australia
    { location: [43.7696, 11.2558], size: 0.06 }, // Florence, Italy
    { location: [41.9028, 12.4964], size: 0.07 }, // Rome, Italy
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.0025;
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r]
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "h-full w-full opacity-0 transition-opacity duration-500"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
