import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about.title')}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>
                {t('about.frontend_exp')}
              </h3>
              <p>
                {t('about.frontend_exp_desc')}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>
                {t('about.backend_exp')}
              </h3>
              <p>
                {t('about.backend_exp_desc')}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>
                {t('about.ui_exp')}
              </h3>
              <p>
                {t('about.ui_exp_desc')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
