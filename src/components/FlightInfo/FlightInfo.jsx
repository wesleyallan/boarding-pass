import DepartureArrival from '../DepartureArrival';
import LeftRightInfo from '../LeftRightInfo';
import styles from './FlightInfo.module.css';

const FlightInfo = () => {
  return (
    <section className={styles.container}>
      <LeftRightInfo
        titleLeft="Voo"
        textLeft="RS995"
        titleRight="Data"
        textRight="23/05/2023"
      />
      <DepartureArrival />
    </section>
  );
};

export default FlightInfo;
