import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compenents/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4' >Tailwind Test</h1>
    <Card productName="Samiksha" PriceDlts= "3000"/>
    <Card productName="Teapot" PriceDlts= "52900"/>

    </>
  )
}

export default App