// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./About.module.css";

type AboutProps = {
  style?: React.CSSProperties;
};

const About: React.FC<AboutProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>ABOUT US</h2>
        <div className={styles.BallContainer}>
            <div className={styles.Ball}></div>
            <div className={styles.Ball}></div>
            <div className={styles.Ball}></div>
            <div className={styles.Ball}></div>
        </div>
        <h3 className={styles.Text} style={{textAlign: 'center'}}>
            Matchain is a video game platform powered by TON, where you can play games and get rewarded with exclusive NFTs.
        </h3>
        <h2 className={styles.Subtitle}>OUR MISSION</h2>
        <h3 className={styles.Text}>
            Create an ecosystem open source addressed to indie developers, which will allow them to learn how to 
            develop a web game bound to NFTs, be published in our platform, be bought using TONCOIN, get revenue and be 
            part of our community. 
        </h3>
        <h2 className={styles.Subtitle}>OUR VISION</h2>
        <h3 className={styles.Text}>
            Provide and promote the development of a high-tech platform where all people in the world can find 
            independent-development games coexisting inside The Open Network.
        </h3>
    </div>
  );
};

export default About;
