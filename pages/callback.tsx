import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Callback: NextPage = () => {
  const {
    query: { code },
  } = useRouter();
  return (
    <div>
      <Head>
        <title>Callback</title>
      </Head>
      <h1>{code}</h1>
    </div>
  );
};

export default Callback;
