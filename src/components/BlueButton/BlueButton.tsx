// REACT
import React from "react";

// STYLES
import styles from "./BlueButton.module.css";

type BlueButtonProps = {
  style?: React.CSSProperties;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const BlueButton: React.FC<BlueButtonProps> = ({ text, onClick }) => {
  ////////////
  // RENDER //
  ////////////
  return (
    <button className={styles.Container} onClick={onClick}>
      <h3 className={styles.ButtonText}>{text}</h3>
    </button>
  );
};

export default BlueButton;