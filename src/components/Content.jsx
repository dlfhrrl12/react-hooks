import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Content = () => {
    const {isDark} = useContext(ThemeContext);
    const style = {
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black"
    }
    return (
        <>
            <div className="content" style={style}>
                <p>이록기님, 좋은 하루 되세요.</p>
            </div>
        </>
    );
}