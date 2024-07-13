import styles from "./page.module.css";
import HomePage from "./_components/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
