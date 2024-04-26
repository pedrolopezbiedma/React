// Styles
import styles from "./Home.module.css";

// Components
import TransactionList from "../../components/TransactionList";
import NewTransaction from "../../components/NewTransaction";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <TransactionList />
      </div>
      <div className={styles.sidebar}>
        <NewTransaction />
      </div>
    </div>
  );
};

export default Home;
