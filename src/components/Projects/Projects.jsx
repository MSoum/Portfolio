import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.skills.Tic_Tac_Toe.title"),
      description: t("projects.skills.Tic_Tac_Toe.description"),
      imageSrc: "projects/tictactoe.png",
      imageAlt: t("projects.skills.Tic_Tac_Toe.imageAlt"),
      demoLink: "https://tictactoe-react0.netlify.app/",
      sourceLink: "https://github.com/MSoum/Tic-Tac-Toe-react"
    },
    {
      title: t("projects.skills.Project_C.title"),
      description: t("projects.skills.Project_C.description"),
      imageSrc: "projects/dragndrop.png",
      imageAlt: t("projects.skills.Project_C.imageAlt"),
      demoLink: t("https://tasks-drag-n-drop-react.netlify.app/"),
      sourceLink: t("https://github.com/MSoum/Tasks-Drag-N-Drop-React")
    }/*,
    {
      title: t(""),
      description: t(""),
      imageSrc: "",
      imageAlt: t(""),
      demoLink: t(""),
      sourceLink: t("")
    }*/
  ];
  
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
