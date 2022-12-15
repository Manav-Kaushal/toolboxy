import RandomNumber from "@components/tools/RandomNumber";
import { page } from "@utils/config";
import { NextSeo } from "next-seo";
import React from "react";

type Props = {};

const RandomNumberGenerator = (props: Props) => {
  return (
    <>
      <NextSeo title={`${page.displayName} | Random Number Generator`} />
      <RandomNumber />
    </>
  );
};

export default RandomNumberGenerator;
