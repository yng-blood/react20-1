import './App.css';
import Funcomp from './component/Funcomp';
import { useState } from 'react';
import Classcomp from './component/Classcomp';

function App() {
  const [Fstate,Fusestate]=useState(false)
  const [Cstate,Cusestate]=useState(false)
 const FShow=()=>{Fstate?Fusestate(false):Fusestate(true) 
console.log("func") }
 const CShow=()=>{Cstate?Cusestate(false):Cusestate(true)
  console.log("func")  }
  return (
    <div classname="linen" >
     <button onClick={FShow} className="button">Function Component </button> 
     <button onClick={CShow} className="button">Class Component </button>
     <div className='flex'>{Fstate && <Funcomp/>}{Cstate && <Classcomp/>}</div>
    </div>
  );
}

export default App;
