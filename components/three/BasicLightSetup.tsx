export function BasicLightSetup() {
  return (
    <>
      <spotLight
        intensity={0.8}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <ambientLight intensity={0.2} />
    </>
  );
}
