import { useState } from "react"


function App() {
  const [color,setColor] =  useState("black");
  const RedColor = ()=>{
    setColor("red");
  }
  return (
    
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor : color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded px-3 py-2" >
          <button onClick={RedColor} className="outline-none px-4 py-1 rounded-lg text-white shadow-" style={{backgroundColor : "red"}}>Red</button>

          <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-lg text-white shadow-" style={{backgroundColor : "green"}}>Green</button>

          <button onClick={()=>{setColor("blue")}} className="outline-none px-4 py-1 rounded-lg text-white shadow-" style={{backgroundColor : "blue"}}>Blue</button>

          <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-lg text-black shadow-" style={{backgroundColor : "pink"}}>pink</button>

          <button onClick={()=>setColor("olive")} className="outline-none px-4 py-1 rounded-lg text-white shadow-" style={{backgroundColor : "olive"}}>olive</button>

          <button onClick={()=>setColor("hotpink")} className="outline-none px-4 py-1 rounded-lg text-black shadow-" style={{backgroundColor : "hotpink"}}>Hot Pink</button>

          <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-lg text-white shadow-" style={{backgroundColor : "black"}}>black</button>

          <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-lg text-black shadow-" style={{backgroundColor : "purple"}}>purple</button>

          <button onClick={()=>setColor("white")} className="outline-none px-4 py-1 rounded-lg text-black shadow-" style={{backgroundColor : "white"}}>white</button>
        </div>
       </div>
     </div>
    
  )
}

export default App
