import { Typewriter } from "react-simple-typewriter";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            <Typewriter
              words={["Hi, my name is Danil"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={2000}
            />
            {/* Hi, my name is <em>Danil</em> */}
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};
export default Header;
