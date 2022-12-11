import React, { ReactNode, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Cursor from "@utils/helpers/cursor";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { scroll, isReady } = useLocomotiveScroll();
  useEffect(() => {
    if (isReady) {
      scroll.on("scroll", (args: any) => {});
    }
    // Init cursor
    const cursor = new Cursor();
    // @ts-ignore
    /* eslint-disable */
  }, []);

  return (
    <>
      <div className="pt-20" id="main-content">
        {children}
      </div>
    </>
  );
};

export default Layout;
