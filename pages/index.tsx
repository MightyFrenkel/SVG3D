import { Environment } from "@react-three/drei";
import type { NextPage } from "next";

import React, { useRef } from "react";
import { Button } from "../components/input/Button";
import {
  useAppContextState,
  useAppContextUpdater,
} from "../components/contexts/AppContext";
import { Controls } from "../components/three/Controls";
import { BaseCanvas } from "../components/three/BaseCanvas";
import { TransformTools } from "../components/input/TransformTools";
import { exportCanvas } from "../helpers/export";
import { Geometries } from "../components/three/Geometries";
import { ObjectTools } from "../components/input/ObjectTools";
import { GithubIcon } from "../components/icons/GithubIcon";
import { ObjectPanel } from "../components/input/ObjectPanel";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useAppContextState();
  const updater = useAppContextUpdater();

  return (
    <div className="h-screen cursor-pointer bg-gradient-to-tr from-blue-100 to-sky-300 relative">
      <BaseCanvas ref={canvasRef}>
        <Controls
          id={state.scene.selected?.id}
          mode={state.controls.mode}
          space={state.controls.space}
        />
        <Geometries
          items={state.scene.geometries}
          onClickGeometry={(e) => {
            updater.scene.setSelected(e.object);
          }}
        />

        <Environment preset="lobby" />
      </BaseCanvas>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/MightyFrenkel/SVGto3D"
        className="absolute left-2 bottom-2 flex gap-2 items-center text-black"
      >
        <GithubIcon />
        Github
      </a>
      <div className="absolute left-2 top-2 text-black">
        <ObjectTools />
      </div>
      <div className="absolute right-2 top-2 text-black flex flex-col gap-2">
        {state.scene.geometries.length > 0 ? <TransformTools /> : undefined}
        {state.scene.selected ? <ObjectPanel /> : undefined}
      </div>
      <div className="absolute right-2 bottom-2 text-black flex gap-2">
        <Button onClick={() => exportCanvas(canvasRef.current)}>Export</Button>
      </div>
    </div>
  );
};

export default Home;
