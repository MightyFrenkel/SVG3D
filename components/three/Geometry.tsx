import React from "react";
import { ShinyMaterial } from "../materials/ShinyMaterial";

export function Geometry({ ...props }: React.ComponentProps<"mesh">) {
  return (
    <group>
      <mesh {...props}>
        <ShinyMaterial />
      </mesh>
    </group>
  );
}
