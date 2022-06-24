import React, { useContext, useState } from "react";
import {
  IAppContextState,
  IAppContextUpdater,
  Mode,
  Space,
} from "../../models/IAppcontext";

const defaultState: IAppContextState = {
  controls: {
    mode: "translate",
    space: "world",
  },
  scene: {
    geometries: [],
  },
};

const defaultUpdater: IAppContextUpdater = {
  controls: {
    setMode: (value: Mode) => {},
    setSpace: (value: Space) => {},
  },
  scene: {
    addGeometry: (value: React.ComponentProps<"mesh">) => {},
  },
};
export const AppContextState =
  React.createContext<IAppContextState>(defaultState);
const AppContextUpdater =
  React.createContext<IAppContextUpdater>(defaultUpdater);

export const useAppContextState = () => {
  const context = useContext(AppContextState);

  if (context === undefined) {
    throw new Error("useAppContextState was used outside of its Provider");
  }
  return context;
};

export const useAppContextUpdater = () => {
  const context = useContext(AppContextUpdater);

  if (context === undefined) {
    throw new Error("useAppContextUpdater was used outside of its Provider");
  }
  return context;
};

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState(defaultState.controls.mode);
  const [space, setSpace] = useState(defaultState.controls.space);
  const [geometries, setGeometries] = useState(defaultState.scene.geometries);

  function addGeometry(value: React.ComponentProps<"mesh">) {
    setGeometries(geometries.concat([value]));
  }

  return (
    <AppContextState.Provider
      value={{
        controls: {
          mode,
          space,
        },
        scene: {
          geometries,
        },
      }}
    >
      <AppContextUpdater.Provider
        value={{
          controls: {
            setMode,
            setSpace,
          },
          scene: {
            addGeometry,
          },
        }}
      >
        {children}
      </AppContextUpdater.Provider>
    </AppContextState.Provider>
  );
}
