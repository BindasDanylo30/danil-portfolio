import { useParams } from "react-router-dom";
import { useState } from "react";
import BtnGitHub from "../components/btnGitHub/btnGitHub";
import { list } from "../helpers/Projects-list";

const Project = () => {
  const { id } = useParams();
  const project = list[id];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h2 className="title-1">{project.title}</h2>

          <img src={project.BigImg} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.Skills}</p>
          </div>

          <BtnGitHub link={project.link} />

          <button className="btn-details" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide description ▲" : "More about the project ▼"}
          </button>

          {/* 3. Блок с выпадающим текстом */}
          {/* Мы используем условный класс для анимации */}
          <div className={`description-content ${isOpen ? "open" : ""}`}>
            <div className="text-inner">
              <h3>About</h3>
              <p>{project.about.problem}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
