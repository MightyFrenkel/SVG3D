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
};

const defaultUpdater: IAppContextUpdater = {
  controls: {
    setMode: (value: Mode) => {},
    setSpace: (value: Space) => {},
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

  return (
    <AppContextState.Provider
      value={{
        controls: {
          mode,
          space,
        },
      }}
    >
      <AppContextUpdater.Provider
        value={{
          controls: {
            setMode,
            setSpace,
          },
        }}
      >
        {children}
      </AppContextUpdater.Provider>
    </AppContextState.Provider>
  );
}
