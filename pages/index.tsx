import type { NextPage } from "next";

import React, { useRef } from "react";
import { Button } from "../components/Button";
import { MainCanvas } from "../components/MainCanvas";
import { exportCanvas } from "../helpers/export";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="h-screen cursor-pointer bg-gradient-to-tr from-blue-100 to-sky-300 relative">
      <MainCanvas ref={canvasRef} />
      <div className="absolute right-2 bottom-2 text-black flex gap-2">
        <Button onClick={() => exportCanvas(canvasRef.current)}>Export</Button>
      </div>
    </div>
  );
};

export default Home;
