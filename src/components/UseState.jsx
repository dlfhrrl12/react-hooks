import { useState } from "react";

export const UseState = () => {
   const [time, setTime] = useState(1); // 시간 기본 업데이트
   const handleClick = () => {
      let newTime; // 시간 저장 변수
      if(time >= 24){  // 24시가 넘을경우 0시로 변경
         newTime = 0;
      }else { // 24시가 안넘을 경우 1시간씩 추가
         newTime = time + 1;
      }
      setTime(newTime); // 시간 업데이트
   }
    return (
        <>
         <div className="">
            <span>현재 시각:{time}</span>
            <button onClick={handleClick}>Update</button>     
         </div>
        </>
    );
}