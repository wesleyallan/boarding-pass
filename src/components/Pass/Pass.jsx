import { useRef } from 'react';
import BoardingInfo from '../BoardingInfo';
import FlightInfo from '../FlightInfo';
import PassangerInfo from '../PassangerInfo';
import styles from './Pass.module.css';

const Pass = () => {
  return (
    <div className={styles.container}>
      <FlightInfo />
      <PassangerInfo />
      <BoardingInfo />
    </div>
  );
};

export default Pass;
