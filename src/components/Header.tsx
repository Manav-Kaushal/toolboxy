import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[80px] flex items-center bg-app shadow-md">
      <div className="custom__container">
        <div className="">
          <Image
            src="https://res.cloudinary.com/manavkaushal/image/upload/v1670447328/Projects/toolboxy/toolboxy_logo_bdp6yf.gif"
            alt="toolboxy logo"
            width={150}
            height={60}
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
