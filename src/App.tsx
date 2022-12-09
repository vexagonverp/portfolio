import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Cookie from './components/Cookie';
import Donut from './components/Donut';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <Donut position={[-1.5, 0, 0]} />
        <Cookie position={[1.5, 0, 0]} />
        <OrbitControls />
        <Environment preset={'dawn'} background blur={0.8}/>
      </Canvas>
    </div>
  );
}

export default App;
