import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Box from './components/Box';
import Cookie from './components/Cookie';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <Box position={[-1.5, 0, 0]} />
        <Cookie position={[1.5, 0, 0]} />
        <OrbitControls />
        <Environment preset={'dawn'} background blur={0.8}/>
      </Canvas>
    </div>
  );
}

export default App;
