import Pass from '../../components/Pass';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cartão de embarque</h1>
      <Pass />
      <p className={styles.textFooter}>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </p>
    </div>
  );
};

export default Home;
