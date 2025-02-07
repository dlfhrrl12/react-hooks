import { useRef } from "react";
import { useState } from "react";

export const UseRef = () => {
   
   const [count, setCount] = useState(0);
   const countRef = useRef(0);
   let countVar = 0;
   
   
   // const increaseCountState = () => {
   //    setCount(count + 1);
   // }
   // const increaseCountRef = () => {
   //    countRef.current = countRef.current + 1;
   //    console.log("Ref => ", countRef.current)
   // }
   
   const doRendering = () =>{
      setCount(count + 1);
   }
   
   const increaseRef = () =>{
      countRef.current = countRef.current + 1;
      
   }
   
   const increaseVar = () => {
      countVar = countVar + 1;
   }
   
    return (
        <>
            <div className="">
               <p>Ref: {countRef.current}</p>
               <p>Var: {countVar}</p>
               <button onClick={doRendering}>Render</button>
               <button onClick={increaseRef}>RefUp</button>
               <button onClick={increaseVar}>VarUp</button>
            </div>
        </>
    );
}