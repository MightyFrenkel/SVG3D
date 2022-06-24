import React from "react";

export interface IAppContextState {
  controls: {
    mode: Mode;
    space: Space;
  };
  scene: {
    geometries: React.ComponentProps<"mesh">[];
  };
}

export interface IAppContextUpdater {
  controls: {
    setMode: (value: Mode) => void;
    setSpace: (value: Space) => void;
  };
  scene: {
    addGeometry: (value: React.ComponentProps<"mesh">) => void;
  };
}

export type Mode = "translate" | "rotate" | "scale";
export type Space = "world" | "local";
