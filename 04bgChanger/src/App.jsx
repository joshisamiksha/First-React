import { useState } from "react"


function App() {
  const [color, setColor] = useState("darkgray")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="rounded-sm px-4 shadow-lg" style={{ backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("Green")} className="rounded-sm px-4" style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => setColor("Yellow")} className="rounded-sm px-4" style={{ backgroundColor: "Yellow" }}>Yellow</button>
          <button onClick={() => setColor("Blue")} className="rounded-sm px-4" style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => setColor("Orange")} className="rounded-sm px-4" style={{ backgroundColor: "Orange" }}>Orange</button>
          <button onClick={() => setColor("Pink")} className="rounded-sm px-4" style={{ backgroundColor: "Pink" }}>Pink</button>
          <button onClick={() => setColor("Gray")}  className="rounded-sm px-4" style={{ backgroundColor: "Gray" }}>Gray</button>
          <button onClick={() => setColor("Purple")} className="rounded-sm px-4" style={{ backgroundColor: "purple" }}>purple</button>
      </div>
    </div>
    </>
  )
}

export default App
