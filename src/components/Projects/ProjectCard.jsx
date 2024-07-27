import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  const {
    title,
    imageSrc,
    description,
    skills = [], // Default to an empty array if skills is undefined
    demoLink,
    sourceLink
  } = project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        width={298}
        height={200}
        style={{ 
          borderRadius: '15px' 
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demoLink} className={styles.link}>
          {t("projects.demoLink")}
        </a>
        <a href={sourceLink} className={styles.link}>
          {t("projects.sourceLink")}
        </a>
      </div>
    </div>
  );
};
