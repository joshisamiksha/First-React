import { useState } from 'react'
import './App.css'

function App() {

 const [counter, setCounter] = useState(10)


  //let counter = 2
  
  const addValue = () => {
    console.log(counter)
    setCounter(counter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)

  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
