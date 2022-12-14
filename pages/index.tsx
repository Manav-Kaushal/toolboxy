import Head from "next/head";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Head>
        <title>ToolBoxy | Best Tools For Frontend Devs</title>
      </Head>
      <div className="text-2xl">
        <code>
          Hi User, Please select a tool from the left sidebar to get started!
        </code>
        <code className="block">Happy Tooling!</code>
      </div>
    </>
  );
};

export default Home;
