import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />

      <main className={styles.main}></main>
      <Landing />

      <footer className={styles.footer}></footer>
    </div>
  );
}
