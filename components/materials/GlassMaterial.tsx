export function GlassMaterial() {
  return (
    <meshPhysicalMaterial
      thickness={5}
      roughness={0.1}
      clearcoat={1}
      clearcoatRoughness={0}
      transmission={1}
      ior={1.25}
      envMapIntensity={0.25}
      color="#ffffff"
      attenuationColor="#ffe79e"
    />
  );
}
