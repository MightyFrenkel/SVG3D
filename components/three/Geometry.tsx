import React from "react";
import { ShinyMaterial } from "../materials/ShinyMaterial";

export function Geometry({ ...props }: React.ComponentProps<"mesh">) {
  return (
    <mesh {...props}>
      <ShinyMaterial />
    </mesh>
  );
}
