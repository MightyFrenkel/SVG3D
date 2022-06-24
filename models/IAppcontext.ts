export interface IAppContextState {
  controls: {
    mode: Mode;
    space: Space;
  };
}

export interface IAppContextUpdater {
  controls: {
    setMode: (value: Mode) => void;
    setSpace: (value: Space) => void;
  };
}

export type Mode = "translate" | "rotate" | "scale";
export type Space = "world" | "local";
