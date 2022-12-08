import Sidebar from "@components/Sidebar";
import Calculator from "@components/tools/Calculator";
import PxToRemConverter from "@components/tools/PxToRemConverter";
import RandomNumberGenerator from "@components/tools/RandomNumberGenerator";
import { useGlobalStore } from "@store/global";
import { SidebarOptionMapping } from "@utils/enums";
import Head from "next/head";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const { view } = useGlobalStore();

  function renderView() {
    if (view) {
      switch (view) {
        case SidebarOptionMapping.Calculator:
          return <Calculator />;
        case SidebarOptionMapping.PxToRemConverter:
          return <PxToRemConverter />;
        case SidebarOptionMapping.RandomNumberGenerator:
          return <RandomNumberGenerator />;
        default:
          return (
            <div className="text-2xl">
              <code>
                Hi User, Please select a tool from the left sidebar to get
                started!
              </code>
              <code className="block">Happy Tooling!</code>
            </div>
          );
      }
    }
  }

  return (
    <>
      <Head>
        <title>ToolBoxy | Best Tools For Frontend Devs</title>
      </Head>
      <div className="grid grid-cols-10 gap-16">
        <Sidebar />
        <section className="col-span-7">{renderView()}</section>
      </div>
    </>
  );
};

export default Page;
