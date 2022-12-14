import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-app to-app-blue text-white custom__container pt-16 h-[calc(100vh-80px)]">
        <div className="grid grid-cols-10 gap-16">
          <Sidebar />
          <section className="col-span-7">{children}</section>
        </div>
      </main>
    </>
  );
};

export default Layout;
