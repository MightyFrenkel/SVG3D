import { Button } from "./Button";
import { useAppContextUpdater } from "../contexts/AppContext";

export function TransformTools() {
  const { controls } = useAppContextUpdater();
  return (
    <div className="flex gap-2">
      <Button onClick={() => controls.setMode("translate")}>Translate</Button>
      <Button onClick={() => controls.setMode("rotate")}>Rotate</Button>
      <Button onClick={() => controls.setMode("scale")}>Scale</Button>
    </div>
  );
}
