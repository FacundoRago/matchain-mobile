// IMPORT REACT
import React from "react";

// Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

// IMPORT STYLES
import styles from "./Roadmap.module.css";

type RoadmapProps = {
  style?: React.CSSProperties;
};

const Roadmap: React.FC<RoadmapProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);

  ////////////
  // RENDER //
  ////////////

  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>ROADMAP</h2>

        <div className={styles.RoadMapContainer}>
            <div className={styles.Item} style={{ marginTop: "0" }}>
                {isOpen ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                    LOREM
                    <Collapse isOpen={isOpen}>
                        <ol className={styles.List}>
                            <li>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen2 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen2(!isOpen2)} className={styles.Button}>
                    LOREM
                    <Collapse isOpen={isOpen2}>
                        <ol className={styles.List}>
                            <li>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen3 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen3(!isOpen3)} className={styles.Button}>
                    LOREM
                    <Collapse isOpen={isOpen3}>
                        <ol className={styles.List}>
                            <li>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>
        </div>

        <div className={styles.LastItem}>
            <div className={styles.Item} style={{ marginLeft: "4px", marginTop: '0px' }}>
                {isOpen4 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen4(!isOpen4)} className={styles.Button}>
                    LOREM
                    <Collapse isOpen={isOpen4}>
                        <ol className={styles.List}>
                            <li>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Roadmap;