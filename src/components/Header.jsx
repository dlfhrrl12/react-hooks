import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Header = () => {
   const {isDark} = useContext(ThemeContext);
   const style = {
      backgroundColor: isDark ? "black" : "lightgray",
      color: isDark ? "white" : "black"
   }
   return (
        <>
            <header className="header" style={style}>
               <h1>Welcome 이록기!</h1>
            </header>
        </>
    );
}