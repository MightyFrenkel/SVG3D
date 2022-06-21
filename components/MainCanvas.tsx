import { Loader, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Suspense } from "react";
import { Sphere } from "./Sphere";

const MainCanvas = React.forwardRef(
  (props, ref: React.Ref<HTMLCanvasElement>) => {
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
          <Suspense fallback={null}>
            <TransformControls mode="translate">
              <Sphere />
            </TransformControls>
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>
        <Loader />
      </>
    );
  }
);

MainCanvas.displayName = "MainCanvas";

export { MainCanvas };
