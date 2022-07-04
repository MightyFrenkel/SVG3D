import React from "react";
import { Object3D } from "three";

export interface IAppContextState {
  controls: {
    mode: Mode;
    space: Space;
  };
  scene: {
    geometries: React.ComponentProps<"mesh">[];
    selected: Object3D<THREE.Event> | undefined | null;
  };
}

export interface IAppContextUpdater {
  controls: {
    setMode: (value: Mode) => void;
    setSpace: (value: Space) => void;
  };
  scene: {
    addGeometry: (value: React.ComponentProps<"mesh">) => void;
    setSelected: (value: Object3D<THREE.Event>) => void;
  };
}

export type Mode = "translate" | "rotate" | "scale";
export type Space = "world" | "local";
