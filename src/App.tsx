import React from 'react';
import { useState } from 'react'
import './App.css'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App
