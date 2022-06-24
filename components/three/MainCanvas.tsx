import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Suspense } from "react";

interface MainCanvasProps {
  children: React.ReactNode;
}
const MainCanvas = React.forwardRef(
  ({ children }: MainCanvasProps, ref: React.Ref<HTMLCanvasElement>) => {
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
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[5, 15, 10]}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>{children}</Suspense>
          <OrbitControls makeDefault />
        </Canvas>
        <Loader />
      </>
    );
  }
);

MainCanvas.displayName = "MainCanvas";

export { MainCanvas };
