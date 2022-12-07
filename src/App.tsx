import './App.css'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';
import Cookie from './components/Cookie';

function App() {
  return (
    <div className="App">
      Cool cookie
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Cookie position={[1.2, 0, 0]} object={undefined}/>
      </Canvas>
    </div>
  )
}

export default App
