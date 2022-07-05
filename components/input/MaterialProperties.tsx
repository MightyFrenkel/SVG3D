import { useAppContextState } from "../contexts/AppContext";
import { SketchPicker } from "react-color";
import { useState } from "react";

export function MaterialProperties() {
  const state = useAppContextState();
  const object = state.scene.selected as THREE.Mesh;
  const material = object?.material as THREE.MeshPhysicalMaterial;
  const [blockPickerColor, setBlockPickerColor] = useState(
    "#" + material.color.getHexString()
  );

  if (!object || !material) return <>Can not update material options</>;

  return (
    <>
      {object ? (
        <div className=" bg-gray-200 pt-4 pb-8 px-4 rounded">
          <SketchPicker
            color={{
              r: material.color.r * 255,
              g: material.color.g * 255,
              b: material.color.b * 255,
            }}
            onChange={(color) => {
              setBlockPickerColor(color.hex);
              material.color.setRGB(
                color.rgb.r / 255,
                color.rgb.g / 255,
                color.rgb.b / 255
              );
            }}
          />
        </div>
      ) : undefined}
    </>
  );
}
