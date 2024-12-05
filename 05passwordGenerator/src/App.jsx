import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [char, setCharAllowed] = useState(false)
  const [num, setNumAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (num) str += "0123456789"
    if (char) str += "~!@#$%^&*(){}[]<>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)


  }, [length, setNumAllowed, setCharAllowed, password])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])



  useEffect(() => {
    passwordGenerator()
  }, [length, num, char])



  return (
    <>
      <div className=' rounded-lg text-orange-600 bg-slate-300 px-0.5 py-px '><h1 className='text-white text-center my-8 mx-96 text-lg px-1 py-2 border '>Password Generator</h1>
        <div className='flex center rounded-lg px-72'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPasswordToClipboard} className='bg-blue-800 text-white shrink-0 rounded-md px-6 border-gray-50'>
            Copy</button>
        </div>
        <div className='flex items-center justify-evenly'>
          <div className=''>
            <input
              type='range'
              min={6}
              max={12}
              value={length}
              className='cursor-pointer bg-blue-500  appearance-none h-2'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label></div>
          <div className=''>
            <input
              type='checkbox'
              defaultChecked={setNumAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            /><label htmlFor='numberInput'>Number</label></div>
          <div className=''>
            <input
              type='checkbox'
              defaultChecked={setCharAllowed}
              id='CharInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            /><label htmlFor='characterInput'>Char</label></div>
        </div>
      </div>
    </>
  )
}

export default App
