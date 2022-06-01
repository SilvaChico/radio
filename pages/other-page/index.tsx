import type { NextPage } from "next";
import Head from "next/head";
import Hls from "hls.js";
import { useEffect, createRef } from "react";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Other page</title>
      <meta name="description" content="Open radio" />
    </Head>
    <h1>Other page</h1>
  </div>
);

export default Home;
