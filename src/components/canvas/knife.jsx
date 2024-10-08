import { useGLTF } from "@react-three/drei";

const Knife = (props) => {
  const { scene } = useGLTF("knife.glb");

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Knife;
