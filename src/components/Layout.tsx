import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-app to-app-blue text-white custom__container pt-16 h-[calc(100vh-80px)]">
        {children}
      </main>
    </>
  );
};

export default Layout;
