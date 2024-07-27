import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();

  const history = [
    {
      role: t("experience.history.microsoftDynamics.role"),
      organisation: t("experience.history.microsoftDynamics.organisation"),
      startDate: t("experience.history.microsoftDynamics.startDate"),
      endDate: t("experience.history.microsoftDynamics.endDate"),
      imageSrc: "history/espaceproprio.png",
      experiences: [
        t("experience.history.microsoftDynamics.experiences.0"),
        t("experience.history.microsoftDynamics.experiences.1"),
        t("experience.history.microsoftDynamics.experiences.2"),
        t("experience.history.microsoftDynamics.experiences.3"),
      ],
    },
    {
      role: t("experience.history.bellRandstad.role"),
      organisation: t("experience.history.bellRandstad.organisation"),
      startDate: t("experience.history.bellRandstad.startDate"),
      endDate: t("experience.history.bellRandstad.endDate"),
      imageSrc: "history/randstad.png",
      experiences: [
        t("experience.history.bellRandstad.experiences.0"),
        t("experience.history.bellRandstad.experiences.1"),
        t("experience.history.bellRandstad.experiences.2"),
      ],
    },
    {
      role: t("experience.history.charlesRiver.role"),
      organisation: t("experience.history.charlesRiver.organisation"),
      startDate: t("experience.history.charlesRiver.startDate"),
      endDate: t("experience.history.charlesRiver.endDate"),
      imageSrc: "history/charlesriver.png",
      experiences: [
        t("experience.history.charlesRiver.experiences.0"),
        t("experience.history.charlesRiver.experiences.1"),
        t("experience.history.charlesRiver.experiences.2"),
      ],
    },
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t("experience.title")}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
