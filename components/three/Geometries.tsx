import { ThreeEvent } from "@react-three/fiber";
import { Geometry } from "./Geometry";

interface GeometriesProps {
  onClickGeometry: (e: ThreeEvent<MouseEvent>) => void;
  items: React.ComponentProps<"mesh">[];
}

export function Geometries({ onClickGeometry, items }: GeometriesProps) {
  return (
    <>
      {items.map((props, index) => (
        <Geometry {...props} key={index} onClick={onClickGeometry} />
      ))}
    </>
  );
}
