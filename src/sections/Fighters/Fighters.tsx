// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Fighters.module.css";

// IMPORT IMAGES
import Image from "./assets/image.png";

// IMPORT COMPONENT
import BlueButton from "../../components/BlueButton/BlueButton";


type FightersProps = {
  style?: React.CSSProperties;
};

const Fighters: React.FC<FightersProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>FIGHTERS</h2>
        <h3 className={styles.New}>NEW GAME!</h3>
        <h3 className={styles.Subtitle}>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </h3>

        {/* EJEMPLO DE COMO DEBE QUEDAR EL VIDEO - UNICAMENTE TENGO LA FOTO EN ESTE MOMENTO */}
        <img src={Image} className={styles.Video} />
        <div className={styles.Shadow}></div>

        <BlueButton text={'PLAY NOW'} />
        <button className={styles.Demo}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.Svg}>
                <path d="M13 24.375C9.98316 24.375 7.08989 23.1766 4.95666 21.0433C2.82343 18.9101 1.625 16.0168 1.625 13C1.625 9.98316 2.82343 7.08989 4.95666 4.95666C7.08989 2.82343 9.98316 1.625 13 1.625C16.0168 1.625 18.9101 2.82343 21.0433 4.95666C23.1766 7.08989 24.375 9.98316 24.375 13C24.375 16.0168 23.1766 18.9101 21.0433 21.0433C18.9101 23.1766 16.0168 24.375 13 24.375ZM13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26Z" fill="#27343C"/>
                <path d="M10.1904 8.21441C10.3233 8.14598 10.4725 8.11553 10.6216 8.12643C10.7706 8.13732 10.9138 8.18914 11.0354 8.27616L16.7229 12.3387C16.8282 12.4138 16.9141 12.5131 16.9733 12.6281C17.0325 12.7431 17.0634 12.8706 17.0634 13C17.0634 13.1294 17.0325 13.257 16.9733 13.372C16.9141 13.487 16.8282 13.5863 16.7229 13.6614L11.0354 17.7239C10.9139 17.8109 10.7708 17.8626 10.6218 17.8735C10.4727 17.8844 10.3236 17.854 10.1908 17.7857C10.0579 17.7173 9.94648 17.6136 9.86872 17.4861C9.79096 17.3585 9.74988 17.2119 9.75 17.0625V8.93754C9.74984 8.78817 9.79086 8.64165 9.86855 8.51408C9.94624 8.38651 10.0576 8.28282 10.1904 8.21441Z" fill="#27343C"/>
            </svg>
            <span>DEMO</span>
        </button>
    </div>
  );
};

export default Fighters;
