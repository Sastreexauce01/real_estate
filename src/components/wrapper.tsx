import React from "react";
import { Navbar5 } from "./navbar5";
import { Footer7 } from "./footer7";


type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({children}: WrapperProps) => {
  return (
    <div className="  overflow-hidden ">
      <Navbar5 />
      {children}
      <Footer7 />
    </div>
  );
};

export default Wrapper;
