"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useMemo, useRef, Suspense, useState, useEffect } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  
  // Reduce points count on smaller screen sizes to boost mobile GPU/CPU performance
  const count = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 1500;
    }
    return 3500;
  }, []);

  const sphere = useMemo(() => {
    const positions = new Float32Array(count);
    random.inSphere(positions, { radius: 1.2 });
    return positions;
  }, [count]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Cap DPR on mobile screens
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
