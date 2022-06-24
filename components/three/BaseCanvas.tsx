import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Suspense } from "react";
import { BasicLightSetup } from "./BasicLightSetup";

interface BaseCanvasProps {
  children: React.ReactNode;
}
const BaseCanvas = React.forwardRef(
  ({ children }: BaseCanvasProps, ref: React.Ref<HTMLCanvasElement>) => {
    return (
      <>
        <Canvas
          ref={ref}
          frameloop="demand"
          gl={{
            preserveDrawingBuffer: true,
          }}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
        >
          <BasicLightSetup />
          <Suspense fallback={null}>{children}</Suspense>
          <OrbitControls makeDefault />
        </Canvas>
        <Loader />
      </>
    );
  }
);

BaseCanvas.displayName = "BaseCanvas";

export { BaseCanvas };
