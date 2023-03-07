import LeftRightInfo from '../LeftRightInfo';
import styles from './PassangerInfo.module.css';

const PassangerInfo = () => {
  return (
    <div className={styles.container}>
      <LeftRightInfo
        titleLeft="Passageiro"
        textLeft="Wesley Silva"
        titleRight="Assento"
        textRight="28A"
      />
    </div>
  );
};

export default PassangerInfo;
