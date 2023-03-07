import Info from '../Info';
import qrcode from '../../assets/qrcode.svg';
import styles from './BoardingInfo.module.css';

const BoardingInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerAllInfos}>
        <div className={styles.containerInfo}>
          <div>
            <Info title="Embarque" secondary>
              16:15
            </Info>
          </div>
          <div>
            <Info title="Terminal">2</Info>
          </div>
          <div>
            <Info title="Portão">15</Info>
          </div>
        </div>
        <div className={styles.containerQrcode}>
          <img src={qrcode} alt="QRCode para embarque" />
          <p>Grupo de embarque: 3</p>
        </div>
      </div>
      <p className={styles.attentionMessage}>
        <strong>Atenção:</strong> o portão fecha 16:45
      </p>
    </div>
  );
};

export default BoardingInfo;
