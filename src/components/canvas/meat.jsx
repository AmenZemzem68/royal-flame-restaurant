import { useGLTF } from "@react-three/drei";

const Meat = (props) => {
  const { scene } = useGLTF("meat_sk.glb");

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Meat;
