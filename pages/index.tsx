import Sidebar from "@components/Sidebar";
import Calculator from "@components/tools/Calculator";
import PxToRemConverter from "@components/tools/PxToRemConverter";
import { SidebarOptionMapping } from "@utils/enums";
import { useStore } from "@utils/store";
import Head from "next/head";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const { view } = useStore();

  function renderView() {
    if (view) {
      switch (view) {
        case SidebarOptionMapping.Calculator:
          return <Calculator />;
        case SidebarOptionMapping.PxToRemConverter:
          return <PxToRemConverter />;
        default:
          return (
            <code>Hi User, Please select a tool from left to get started!</code>
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
        <section className="col-span-8">{renderView()}</section>
      </div>
    </>
  );
};

export default Page;
