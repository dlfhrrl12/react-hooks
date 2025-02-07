import { useState } from "react";
import { Page } from "./Page";
import { ThemeContext } from "../context/ThemeContext";

export const Context = () => {
   const [isDark, setIsDark] = useState(false);
    return (
        <>
         <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page  />
        </ThemeContext.Provider>
        </>
    );
}