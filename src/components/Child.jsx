import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Child() {
  const theme=useContext(ThemeContext);

  return <p>Saat ini tema: {theme}</p>
}
export default Child;