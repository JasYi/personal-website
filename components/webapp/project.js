import "./project.css";
import { Card } from "flowbite";

const Project = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((project) => (
        <>
          <a
            href={project.link}
            target="_blank"
            class="m-1 w-[45%] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
            <div className="flex flex-wrap">
              {project.tech.map((tech) => (
                <span class="border divide-black mt-1 bg-white text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            <p class="my-2 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <img
              class="h-auto max-w-full rounded-lg"
              src={project.img}
              alt="image description"
            />
          </a>
        </>
      ))}
    </>
  );
};

export default Project;
