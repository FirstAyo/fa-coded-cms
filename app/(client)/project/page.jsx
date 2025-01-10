import ProjectCard from "@/app/components/Projectcard";
import React from "react";

function ProjectsPage() {
  return (
    <div>
        <h1 className="text-2xl px-16 border-b border-red-800 lg:w-[95%] mx-auto">All Projects</h1>
      <ProjectCard />
    </div>
  );
}

export default ProjectsPage;
