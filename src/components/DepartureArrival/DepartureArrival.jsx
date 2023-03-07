import LocateInfo from '../LocateInfo';
import styles from './DepartureArrival.module.css';
import airplane from '../../assets/airplane.svg';

const DepartureArrival = () => {
  return (
    <div className={styles.container}>
      <LocateInfo airport="GRU" hour="17:00">
        São Paulo, Brasil
      </LocateInfo>
      <img className={styles.airplane} src={airplane} alt="Ícone de avião" />
      <LocateInfo airport="SFO" hour="04:48" fuso="+1" align="right">
        São Francisco, EUA
      </LocateInfo>
    </div>
  );
};

export default DepartureArrival;
