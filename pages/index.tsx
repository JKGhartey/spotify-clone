import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";

import { getSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0 text-white">
        <Player />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context : GetServerSidePropsContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
