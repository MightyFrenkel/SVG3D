import { useTexture } from "@react-three/drei";

export function Sphere(props: React.ComponentProps<"mesh">) {
  const texture = useTexture("/terrazo.png");
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
