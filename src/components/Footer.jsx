import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Footer = () => {
    const {isDark, setIsDark} = useContext(ThemeContext)
    const style = {
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black"
     }
    const toggleTheme = () => {
        setIsDark(!isDark);
    }
    return (
        <>
            <footer className="footer" style={style}>
                <button className="button" onClick={toggleTheme}>
                    Dark Mode
                </button>
            </footer>
        </>
    );
}