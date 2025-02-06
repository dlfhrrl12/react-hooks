import { useState } from "react";
import { Timer } from "./Timer";


export const UseEffact = () => {
   // const [count, setCount] = useState(0);
   // const [text, setText] = useState("");
   
   // const handleCountUpdate = () => {
   //    setCount(count + 1);
   // }
   
   // const handleInputChange = (e) => {
   //    setText(e.target.value);
   // }
   
   // // count 될때마다 렌더링 매번 실행됨
   // // useEffect(() => {
   // //    console.log("Rendering Count");
   // // }, [count])
   
   // useEffect(() => {
   //    console.log('마운팅');
   // }, []);
   const [showTimer, setShowTimer] = useState(false);
   
    return (
        <>
            <div className="">
               {/* <p>{count}</p>
               <button onClick={handleCountUpdate}>+1</button> <br />
               <input type="text" onChange={handleInputChange}/> <br />
               <span>{text}</span> */}
               
               {showTimer && <Timer />}
               <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
               
            </div>
        </>
    );
}