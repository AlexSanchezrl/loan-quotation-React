import { useState, useEffect } from "react";
import  Header  from "./components/Header";
import Buttons from "./components/Buttons"
import { formatearDinero, totalApagar } from "./helpers/index";

function App() {

  const[cantidad, setCantidad] = useState(10000);
  const[meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [mensualPago, setMensualPago] = useState(0);



  useEffect(()=>{

    const totalPagarFinal = totalApagar(cantidad, meses);
    setTotal(totalPagarFinal)

  }, [cantidad, meses, total]);

  useEffect(()=>{

    const finalPago = total / meses
    setMensualPago(finalPago)

  }, [total]);


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

      <p className="text-center text-5xl my-10 text-indigo-500 font-bold">
        
        { formatearDinero(cantidad) }
        
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">

          Choose a <span className="text-indigo-600">Term</span> to pay

      </h2>

      <select className="mt-5 w-full p-2 bg-gray-100 border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
      value={meses}
      onChange={e => setMeses(+e.target.value)}
      
      >

        <option>Options</option>
        <option value="6">6 Months</option>
        <option value="12">12 Months</option>
        <option value="24">24 Months</option>


      </select>


    <div className="my-5 space-y-3 bg-gray-50 p-5">

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">

         <span className="text-indigo-600">Payment </span>Summary

      </h2>

      <p className="text-xl text-gray-500 text-center font-bold"> {meses} Months</p>
      <p className="text-xl text-gray-500 text-center font-bold">Total to pay {formatearDinero(total)}</p>
      <p className="text-xl text-gray-500 text-center font-bold">Monthly {formatearDinero(mensualPago)}</p>



    </div>

    </div>
    
  )
}

export default App
