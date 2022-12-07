import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
function Cookie(props: ThreeElements['primitive']) {
  const gltf = useLoader(GLTFLoader, 'cookie.gltf')
  useFrame((state, delta) => {
    gltf.scene.rotateZ(0.01)
    gltf.scene.rotateY(0.01)
  })
  return (
    <group>
      <primitive {...props} object={gltf.scene} scale={0.2}/>
    </group>
  );
}

export default Cookie;
