import { Environment, RoundedBox, Stage } from "@react-three/drei";
import type { NextPage } from "next";

import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import { useAppContextState } from "../components/contexts/AppContext";
import { Controls } from "../components/three/Controls";
import { MainCanvas } from "../components/three/MainCanvas";
import { ShinyMaterial } from "../components/materials/ShinyMaterial";
import { ToolBar } from "../components/ToolBar";
import { exportCanvas } from "../helpers/export";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedObject, setSelectedObject] = useState<number | null>(null);
  const [meshes, setMeshes] = useState<any[]>([]);
  const { controls } = useAppContextState();

  function addMesh() {
    setMeshes(meshes.concat([{}]));
  }

  return (
    <div className="h-screen cursor-pointer bg-gradient-to-tr from-blue-100 to-sky-300 relative">
      <MainCanvas ref={canvasRef}>
        <Controls
          id={selectedObject}
          mode={controls.mode}
          space={controls.space}
        />

        {meshes.map((mesh, index) => (
          <RoundedBox
            key={index}
            position={[0, 0, 0]}
            args={[1, 1, 1]}
            radius={0.05}
            smoothness={4}
            onClick={(e) => {
              setSelectedObject(e.object.id);
              console.log(e.object.id);
            }}
          >
            <ShinyMaterial />
          </RoundedBox>
        ))}

        <Environment preset="lobby" />
      </MainCanvas>
      <div className="absolute left-2 top-2 text-black">
        {meshes.length > 0 ? <ToolBar /> : undefined}
      </div>
      <div className="absolute right-2 bottom-2 text-black flex gap-2">
        <Button onClick={() => addMesh()}>Add</Button>
        <Button onClick={() => exportCanvas(canvasRef.current)}>Export</Button>
      </div>
    </div>
  );
};

export default Home;
