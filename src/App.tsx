import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Box from './components/Box';
import Cookie from './components/Cookie';

function App() {
  return (
    <div className='App'>
      Cool cookie
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.5, 0, 0]} />
        <Cookie position={[1.5, 0, 0]} />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Canvas>
    </div>
  );
}

export default App;
