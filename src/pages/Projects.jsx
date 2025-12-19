import Project from "../components/project/Project";
import { list } from "../helpers/Projects-list";
const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {list.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
