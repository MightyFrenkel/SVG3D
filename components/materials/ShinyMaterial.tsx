export function ShinyMaterial() {
  return (
    <meshPhysicalMaterial
      envMapIntensity={0.4}
      clearcoat={0.8}
      clearcoatRoughness={0.2}
      roughness={1}
      metalness={0}
      color="#555555"
    />
  );
}
