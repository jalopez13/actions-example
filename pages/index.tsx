import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Welcome 👋 to Next.Js Github Actions CI/CD Demo.</h1>
      </main>
    </div>
  );
};

export default Home;
