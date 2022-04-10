import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
