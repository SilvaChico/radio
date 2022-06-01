import type { NextPage } from "next";
import Head from "next/head";
import styles from "./styles/Home.module.css";
import Player from "./components/player";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Radio</title>
        <meta name="description" content="Open radio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Radio</h1>
        <Player />
      </main>
    </div>
  );
};

export default Home;
