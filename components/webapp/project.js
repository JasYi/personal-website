import "./project.css";

const Project = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((project) => (
        <div className="single-project">
          <div className="project">
            <h2 className="project-title">{project.name}</h2>
            <div className="descriptions">
              {project.tech.map((tech) => (
                <p className="description-tag">{tech}</p>
              ))}
            </div>
          </div>
          <div className="image-container">
            <div className="project-description">
              <p className="individual-description">{project.description}</p>
            </div>
            <div className="images">
              <a href={project.link} target="_blank">
                <img src={project.img} className="project-image" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
