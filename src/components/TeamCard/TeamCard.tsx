// REACT
import React from "react";

// STYLES
import styles from "./TeamCard.module.css";

type TeamCardProps = {
  style?: React.CSSProperties;
  name: string;
  job: string;
  image: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, job, image }) => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <div className={styles.Ball}></div>
        <img src={image} className={styles.Image} />
        <h3 className={styles.Name}>{name}</h3>
        <h3 className={styles.Job}>{job}</h3>
    </div>
  );
};

export default TeamCard;