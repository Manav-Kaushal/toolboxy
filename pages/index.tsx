import { page } from "@utils/config";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <NextSeo title={`${page.displayName} | Best Tools For Frontend Devs`} />
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
