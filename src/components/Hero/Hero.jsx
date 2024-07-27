import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> {t('hero.name')}</h1>
        <p className={styles.description}>
          {t('hero.description')}
        </p>
        <a href="michaelsoumah25@gmail.com" className={styles.contactBtn}>
          {t('hero.get_in_touch')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
