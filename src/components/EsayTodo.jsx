import { useState } from "react";

export const EsayTodo = () => {
   const [text, SetText] = useState([]); // 상태 관리
   const [input, SetInput] = useState("");
   
   const handleChange = (e) => {
      SetInput(e.target.value);
   }
   
   const handleUpload = () => {
      SetText((prev) => {
         return [input, ...prev];
      })
   }
   
    return (
        <>
            <div className="">
               <input type="text" onChange={handleChange}/>
               <button onClick={handleUpload}>Upload</button>
               <ul>
                  {text.map((intext, idx) => {
                     return <li key={idx}>{intext}</li>
                  })}
               </ul>
            </div>
        </>
    );
}