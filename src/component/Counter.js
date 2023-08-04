import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [counter,setCounter]=useState(0);
    const Increment=()=>{
        setCounter(counter+1);
    };
    const Decrement=()=>{
        if(counter==0)
        return;
        setCounter(counter-1);
    }
  return (
    <div>counter :{counter}
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </div>
  )
}
