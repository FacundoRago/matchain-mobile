// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Team.module.css";

// IMPORT COMPONENTS
import TeamCard from "../../components/TeamCard/TeamCard";

// IMPORT IMAGES
import Penguin from "./assets/penguin.png";
import Astro from "./assets/ale.png";
import Agus from "./assets/agus.png";
import Flor from "./assets/flor.png";
import Facu from "./assets/facu.png";
import Master from "./assets/master.png";

type TeamProps = {
  style?: React.CSSProperties;
};

const Team: React.FC<TeamProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>TEAM</h2>
        <div className={styles.CardContainer}>
            <TeamCard name={'Penguin'} job={'COFOUNDER'} image={Penguin} />
            <TeamCard name={'Astro'} job={'COFOUNDER'} image={Astro} />
            <TeamCard name={'Molly'} job={'DESIGNER'} image={Agus} />
            <TeamCard name={'Karol C'} job={'DESIGNER'} image={Flor} />
            <TeamCard name={'Cordoba33'} job={'DEVELOPER'} image={Facu} />
            <TeamCard name={'Master'} job={'SCRUM MASTER'} image={Master} />
        </div>
    </div>
  );
};

export default Team;
