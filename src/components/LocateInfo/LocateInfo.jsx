import styles from './LocateInfo.module.css';

const LocateInfo = ({
  children,
  airport = 'GRU',
  hour = '00:00',
  fuso = '',
  align = 'left',
}) => {
  if (align === 'right') {
    return (
      <div>
        <p className={styles.cityR}>{children}</p>
        <p className={styles.airportR}>{airport}</p>
        <time className={styles.hourR}>
          {hour}
          {fuso && <sup className={styles.fuso}>{fuso}</sup>}
        </time>
      </div>
    );
  }

  return (
    <div>
      <p className={styles.city}>{children}</p>
      <p className={styles.airport}>{airport}</p>
      <time className={styles.hour}>
        {hour}
        {fuso && <sup className={styles.fuso}>{fuso}</sup>}
      </time>
    </div>
  );
};

export default LocateInfo;
