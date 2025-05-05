import ProjectCard from "@/app/components/Projectcard";
import React from "react";

export const metadata = {
  title: "Projects",
  description:
    "View my latest coding projects showcasing expertise in React.js, Next.js, JavaScript, MySQL, NoSQL, and WordPress.",
};

function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl px-5 border-b border-red-800 lg:w-[95%] mx-auto">
        All Projects
      </h1>
      <ProjectCard />
    </div>
  );
}

export default ProjectsPage;
