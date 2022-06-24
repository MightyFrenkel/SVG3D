import { GlassMaterial } from "../materials/GlassMaterial";

export function Sphere(props: React.ComponentProps<"mesh">) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <GlassMaterial />
    </mesh>
  );
}
