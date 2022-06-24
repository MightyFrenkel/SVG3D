import { TransformControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

interface ControlsProps {
  id: number | undefined | null;
  mode: string;
  space: string;
}

export function Controls({ id, mode, space }: ControlsProps) {
  const scene = useThree((state) => state.scene);
  const transformingObject = id ? scene.getObjectById(id) : false;

  return (
    <>
      {id ? (
        <TransformControls
          enabled={transformingObject ? true : false}
          object={scene.getObjectById(id)}
          mode={mode}
          space={space}
        />
      ) : undefined}
    </>
  );
}
