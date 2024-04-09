import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { worksData } from "../constants/data";
import { ChevronLeft } from "lucide-react";

export default function Work() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const projectDoc = worksData.find((project) => project.id === Number(id));
    setProject(projectDoc);
  }, []);
  return (
    <>
      {project && (
        <section className="relative w-full min-h-screen bg-white common-padding">
          <Link
            to="/"
            className="absolute top-2 left-2 w-12 h-12 rounded-full bg-white border border-zinc-600 flex items-center justify-center"
          >
            <ChevronLeft />
          </Link>
          <div className="w-full h-full common-width flex flex-col gap-2">
            <div className="w-full h-[20rem]">
              <img
                src={project.images[0].src}
                alt="Image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h1 className="text-xl text-zinc-800 font-semibold">
              {project.title}
            </h1>
            <p className="text-zinc-700">{project.desc}</p>
          </div>
        </section>
      )}
    </>
  );
}
