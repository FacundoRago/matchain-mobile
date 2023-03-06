// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Home.module.css";

// IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper-bundle.min.css"
import { Pagination, Autoplay } from "swiper";

// IMPORT IMAGE
import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";
import Character from "./assets/character.png";
import Texture from "./assets/texture.png";

// IMPORT COMPONENT
import BlueButton from "../../components/BlueButton/BlueButton";


type HomeProps = {
  style?: React.CSSProperties;
};

const Home: React.FC<HomeProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
      <Swiper
      
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
          renderBullet: (index, className) => {
          return '<span class="' + className + '">' + ("") + "</span>";
          },
        }}
        modules={[Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide className={styles.Slide}>
          <img src={Slide2} className={styles.Image2} />
          <img src={Texture} className={styles.Texture} />
          <h2 className={styles.Start}>START YOUR <b>OWN GAME</b> NOW</h2>
          <div className={styles.Shadow}></div>
          <div className={styles.Learn}>
              <BlueButton text={"LEARN NOW"} />
          </div>
        </SwiperSlide>
          
        <SwiperSlide className={styles.Slide}>
          <img src={Slide1} className={styles.Image} />
          <h2 className={styles.Title}>FIGHTERS</h2>
          <img src={Character} className={styles.Character} />
          <div className={styles.Shadow}></div>
          <div className={styles.Play}>
              <BlueButton text={"PLAY NOW"} />
          </div>
        </SwiperSlide>            
      </Swiper>

      <div className="my-custom-pagination-div" />
      <a
        title="Telegram"
        href="https://telegram.com/"
        target="_blank"
        className={styles.Telegram}
      />
    </div>
  );
};

export default Home;
