import { useEffect, useState } from "react";

export const Timer = () => {
   const [count, setCount] = useState(0);
   
   useEffect(() => {
      const timer = setInterval(() => {
         setCount(prevCount => prevCount + 1); // 최신 count 값을 안전하게 사용
      }, 1000);
      
      return () => clearInterval(timer); // 언마운트 시 정리
   }, []); 

   return (
      <div>
         <span>타이머를 시작합니다. {count}</span>
      </div>
   );
}
