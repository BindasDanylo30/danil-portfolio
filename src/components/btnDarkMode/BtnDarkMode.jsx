import { useEffect, useRef } from "react";
import useLocalStorage from "../../utils/useLocalStorage.jsx";
import "./btnDarkMode.scss";
import sun from "./sun.svg";
import moon from "./moon.svg";
import DetectDarkMode from "../../utils/DetectDarkMode.jsx";

const btnDarkMode = () => {
  //   const [darkMode, setDarkMode] = useState("light");

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", DetectDarkMode());

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.add("dark-mode-btn--active");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.remove("dark-mode-btn--active");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((curentValue) => {
      return curentValue === "light" ? "dark" : "light";
    });
  };
  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
};

export default btnDarkMode;
