import { useEffect } from "react";
import { useRef } from "react";

export const RefLogin = () => {
   const inputRef = useRef();
   
   useEffect(() => {
      // console.log(inputRef);
      inputRef.current.focus();
   }, [])
   
   const login = () => {
      alert(`환영합니다. ${inputRef.current.value}!`);
      inputRef.current.focus();
   }
    return (
        <>
            <div className="">
               <input ref={inputRef} type="text" placeholder="UserName" />
               <button onClick={login}>로그인</button>
            </div>
        </>
    );
}