import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
function Donut(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, 'donut.gltf');
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });
  return (
    <mesh {...props} ref={mesh} scale={0.15}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export default Donut;
