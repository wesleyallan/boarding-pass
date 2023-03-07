import styles from './Info.module.css';

const Info = ({ title, children, secondary = false }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={secondary ? styles.textSecondary : styles.text}>
        {children}
      </p>
    </>
  );
};

export default Info;
