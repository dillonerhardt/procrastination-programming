import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Procrastination Payer</title>
        <meta
          name="description"
          content="Procrastination Payer make money motivate you!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-200 p-4">
        <span>Welcome to Procrastination Payer</span>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
