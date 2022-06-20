import type { NextPage } from "next";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { Sphere } from "../components/Sphere";

const Home: NextPage = () => {
  return (
    <div className="h-screen cursor-pointer bg-gradient-to-tr from-blue-100 to-sky-300">
      <Canvas
        frameloop="demand"
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
          <Sphere />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default Home;
