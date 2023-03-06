// REACT
import React from "react";

// STYLES
import styles from "./Profile.module.css";

// IMPORT IMAGES
import Background from './assets/background.png';
import Perfil from './assets/perfil.png';
import Edit from './assets/edit.svg';
import Banner1 from './assets/banner1.png';
import Banner2 from './assets/banner2.png';
import Banner3 from './assets/banner3.png';

// IMPORT BOOTSTRAP
import { Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';

// IMPORT COMPONENTS
import BlueButton from "../../components/BlueButton/BlueButton";

const Profile: React.FC = () => {
  const [g, setG] = React.useState(true);

  // MODAL 
  const [showBanner, setShowBanner] = React.useState(false);
  const handleCloseBanner = () => setShowBanner(false);
  const handleShowBanner = () => setShowBanner(true);
  
  const [showName, setShowName] = React.useState(false);
  const handleCloseName = () => setShowName(false);
  const handleShowName = () => setShowName(true);

  ////////////
  // RENDER //
  ////////////

  return (
    <section className={styles.Container}>
      { g ? (
        <div onClick={() => setG(!g)} className={styles.ProfileContainer}>
          <img src={Perfil} className={styles.Perfil} />
          <h3 className={styles.Name}>Penguin</h3>  
          <img src={Background} className={styles.Background} />
        </div>
        ) : (
        <div className={styles.Gray}>
          <div onClick={() => setG(!g)} className={styles.ProfileContainer}>
            <img src={Background} className={styles.BackgroundGray} />
            <h3 className={styles.NameGray}>Penguin</h3>
            <img src={Perfil} className={styles.PerfilGray} />
          </div>
          <button className={styles.Button} style={{marginTop: '110px', marginLeft: '85%'}} onClick={handleShowBanner}>
            <img src={Edit} />
          </button>
          <button className={styles.Button} style={{marginTop: '120px', marginLeft: '60%'}}>
            <img src={Edit} />
          </button>
          <button className={styles.Button} style={{marginTop: '75%', marginLeft: '72%'}}  onClick={handleShowName}>
            <img src={Edit} />
          </button>
        </div>
      )}
      
      {/* MODAL CHANGE BANNER */}
      <Modal show={showBanner} onHide={handleCloseBanner}>
        <Modal.Body>
          CHANGE BANNER PICTURE
          <div className={styles.Banners}>
            <img src={Banner1} className={styles.Banner} />
            <img src={Banner2} className={styles.Banner} />
            <img src={Banner3} className={styles.Banner} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <BlueButton text={'ACCEPT'} onClick={handleCloseBanner} />
          <button className={styles.CancelButton} onClick={handleCloseBanner}>
            CANCEL
          </button>
        </Modal.Footer>
        <h3 className={styles.Remember}>*REMEMBER THAT FOR EVERY CHANGE YOU WILL BE CHARGED A FEE</h3>
      </Modal>

      {/* MODAL CHANGE NAME */}
      <Modal show={showName} onHide={handleCloseName}>
        <Modal.Body>
          CHANGE NAME
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="INSERT NEW NAME..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BlueButton text={'ACCEPT'} onClick={handleCloseName} />
          <button className={styles.CancelButton} onClick={handleCloseName}>
            CANCEL
          </button>
        </Modal.Footer>
        <h3 className={styles.Remember}>*REMEMBER THAT FOR EVERY CHANGE YOU WILL BE CHARGED A FEE</h3>
      </Modal>
    </section>
  );
};

export default Profile;