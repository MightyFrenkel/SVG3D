import { useState } from "react";
import { useAppContextUpdater } from "../contexts/AppContext";
import { Button } from "./Button";
import { Shape } from "../../models/Shape";
import { createShapeBufferGeometry } from "../../helpers/createShapeBufferGeometry";

export function ObjectTools() {
  const { scene } = useAppContextUpdater();
  const [collapsed, setCollapsed] = useState(true);

  function createShape(shape: Shape) {
    const geometry = createShapeBufferGeometry(shape);
    scene.addGeometry({ geometry });
    setCollapsed(true);
  }

  return (
    <div className="">
      <Button onClick={() => setCollapsed(!collapsed)}>Add</Button>
      {!collapsed ? (
        <div className="flex flex-col gap-1">
          <Button onClick={() => createShape(Shape.Cylinder)}>Cylinder</Button>
          <Button onClick={() => createShape(Shape.Sphere)}>Sphere</Button>
          <Button onClick={() => createShape(Shape.Box)}>Box</Button>
          <Button onClick={() => createShape(Shape.Tetrahedron)}>
            Tetrahedron
          </Button>
          <Button onClick={() => createShape(Shape.Torus)}>Torus</Button>
          <Button onClick={() => createShape(Shape.Cone)}>Cone</Button>
          <Button onClick={() => createShape(Shape.Icosahedron)}>
            Icosahedron
          </Button>
          <Button onClick={() => createShape(Shape.Octahedron)}>
            Octahedron
          </Button>
        </div>
      ) : undefined}
    </div>
  );
}
