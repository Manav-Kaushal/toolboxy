import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <header className="h-[80px] flex items-center bg-app shadow-md">
      <div className="custom__container">
        <Image
          src="https://res.cloudinary.com/manavkaushal/image/upload/v1671023007/Projects/toolboxy/yellow_logo_250_100_ctgopo.gif"
          alt="toolboxy logo"
          width={150}
          height={60}
          className="cursor-pointer"
          onClick={() => router.push("/")}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
