import { Button } from "./Button";
import {
  useAppContextState,
  useAppContextUpdater,
} from "../contexts/AppContext";

export function TransformTools() {
  const { controls } = useAppContextUpdater();
  const state = useAppContextState();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          state.controls.space === "world"
            ? controls.setSpace("local")
            : controls.setSpace("world")
        }
      >
        {state.controls.space}
      </Button>
      <Button onClick={() => controls.setMode("translate")}>Translate</Button>
      <Button onClick={() => controls.setMode("rotate")}>Rotate</Button>
      <Button onClick={() => controls.setMode("scale")}>Scale</Button>
    </div>
  );
}
