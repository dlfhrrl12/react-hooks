import { useMemo, useState } from "react";

const hardCalculate = (number) => {
   for(let i=0; i < 999999999; i++){}
      return number + 10000;
}

const easyCalculate = (number) => {
    return number + 1;
}

export const SaveMemo = () => {
   const [hardNumber, setHardNumber] = useState(1);
   const [easyNumber, setEasyNumber] = useState(1);
//    const hardSum = hardCalculate(hardNumber);
   const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
   }, [hardNumber]) 
   const easySum = easyCalculate(easyNumber);
   
    return (
        <>
            <div className="">
               <h3>무거운 계산</h3>
               <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
               <span> + 10000 = {hardSum}</span>
            </div>
            <div className="">
               <h3>가벼운 계산</h3>
               <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
               <span> + 1 = {easySum}</span>
            </div>
        </>
    );
}