import { useTexture } from "@react-three/drei";

export function TextureMaterial({ input }: { input: string }) {
  const texture = useTexture(input ?? "/terrazo.png");
  return (
    <meshPhysicalMaterial
      envMapIntensity={0.4}
      map={texture}
      clearcoat={0.8}
      clearcoatRoughness={0}
      roughness={1}
      metalness={0}
    />
  );
}
