// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Education.module.css";

// IMPORT IMAGES
import Image from "./assets/image.png";

// IMPORT COMPONENT
import BlueButton from "../../components/BlueButton/BlueButton";


type EducationProps = {
  style?: React.CSSProperties;
};

const Education: React.FC<EducationProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>EDUCATION</h2>
        <h3 className={styles.Subtitle}>
            In Matchain, you can learn how to make webapps and mobile video games. 
            Also you can learn exactly about TON and how to code smart contracts and deploy them from our website.
        </h3>

        {/* EJEMPLO DE COMO DEBE QUEDAR EL VIDEO - UNICAMENTE TENGO LA FOTO EN ESTE MOMENTO */}
        <img src={Image} className={styles.Video} />

        <BlueButton text={'LEARN NOW'} />
    </div>
  );
};

export default Education;
