import { useState } from "react";
import  Header  from "./components/Header";
import Buttons from "./components/Buttons"

function App() {

  const[cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEPS = 100;

  function handleChange(e){
    
  setCantidad(+e.target.value);

  }

  function handleClickDown(e){
    
    const valor = cantidad - STEPS;

    if(valor < MIN){

      return 
    }

    else{

      setCantidad(valor)
    }

    
  
    }

    function handleClickUp(e){
    
      const valor = cantidad + STEPS;
      
      if(valor > MAX){

        return

      }

      else{

        setCantidad(valor)

      }

    
      }

  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      <Header />

      <div className="flex justify-between my-6">

        <Buttons
        style='button text-red-600 font-bold text-6xl'
        valor='-'
        fn= {handleClickDown}
        />

        <Buttons 
        style='button text-green-600 font-bold text-6xl'
        valor='+'
        fn= {handleClickUp}
        />

      </div>

        <input type="range" 
        className="w-full h-6 bg-gray-500 accent-lime-300 hover:accent-lime-700"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEPS}
        value={cantidad}
      />

      <p className="text-center text-5xl my-10 text-indigo-500 font-bold">{cantidad}</p>

    </div>
    
  )
}

export default App
