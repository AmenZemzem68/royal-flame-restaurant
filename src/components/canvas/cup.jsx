import { useGLTF } from "@react-three/drei";

const Cup = (props) => {
  const { scene } = useGLTF("cup.glb");

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cup;
