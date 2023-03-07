import Info from '../Info';
import styles from './LeftRightInfo.module.css';

const LeftRightInfo = ({ titleLeft, textLeft, titleRight, textRight }) => {
  return (
    <section className={styles.container}>
      <div className={styles.containerInfoLeft}>
        <Info title={titleLeft}>{textLeft}</Info>
      </div>
      <div className={styles.containerInfoRight}>
        <Info title={titleRight}>{textRight}</Info>
      </div>
    </section>
  );
};

export default LeftRightInfo;
