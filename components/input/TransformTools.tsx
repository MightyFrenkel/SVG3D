import { Button } from "./Button";
import {
  useAppContextState,
  useAppContextUpdater,
} from "../contexts/AppContext";

export function TransformTools() {
  const update = useAppContextUpdater();
  const state = useAppContextState();

  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          state.controls.space === "world"
            ? update.controls.setSpace("local")
            : update.controls.setSpace("world")
        }
      >
        {state.controls.space}
      </Button>
      <Button
        selected={state.controls.mode === "translate"}
        onClick={() => update.controls.setMode("translate")}
      >
        Translate
      </Button>
      <Button
        selected={state.controls.mode === "rotate"}
        onClick={() => update.controls.setMode("rotate")}
      >
        Rotate
      </Button>
      <Button
        selected={state.controls.mode === "scale"}
        onClick={() => update.controls.setMode("scale")}
      >
        Scale
      </Button>
    </div>
  );
}
