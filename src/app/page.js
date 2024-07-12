import Image from "next/image";
import styles from "./page.module.css";
import Admin from "./admin/page"
import HomePage from "./_components/HomePage";
import Profile from './profile/page'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <HomePage /> */}
      {/* <Admin/> */}
      <Profile/>
    </main>
  );
}
