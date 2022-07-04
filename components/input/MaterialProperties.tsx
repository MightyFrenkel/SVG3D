import { useThree } from "@react-three/fiber";
import { useAppContextState } from "../contexts/AppContext";
import { Button } from "./Button";

export function MaterialProperties() {
  const state = useAppContextState();
  const object = state.scene.selected;
  if (!object && "material" in object) return <></>;

  return (
    <div>
      {object ? (
        <div className=" bg-gray-200 pt-4 pb-8 px-4 rounded">
          <div className="w-full border-b pb-1">
            <p>Material options</p>
          </div>
          <div className="flex gap-1">
            <Button onClick={() => object.material.color.setRGB(1, 0, 0)}>
              red
            </Button>
            <Button onClick={() => object.material.color.setRGB(0, 1, 0)}>
              green
            </Button>
            <Button onClick={() => object.material.color.setRGB(0, 0, 1)}>
              blue
            </Button>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
