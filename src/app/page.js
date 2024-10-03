'use client'
import { useState } from "react";


export default function Home() {
  const [count ,setCount]=useState(0)
  const handleAdd=()=>{
    const newCount= count+1
    setCount(newCount)
  }
  return (
    <div className="h-screen">
     <h1>alhamdulillah:{count}</h1>

     <button onClick={handleAdd}>add</button>
    </div>
  );
}
