import styles from "./index.module.css";
import background from "./images/background.jpg";

function wd_2() {
  return (
    <div className={styles.page}>
        <img src={background} alt="Background" />
      <header className={styles.header}>
        <h1 className={styles.title}>Demo Wedding</h1>
      </header>
      <main className={styles.main}>
        <p>Welcome to the Demo Wedding!</p>
      </main>
    </div>
  );
}

export default wd_2;