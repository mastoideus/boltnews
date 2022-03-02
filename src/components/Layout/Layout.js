import React, { Fragment } from "react";
import MainHeader from "./MainHeader/MainHeader";

const Layout = ({ children, onScrollNav }) => {
  return (
    <Fragment>
      <MainHeader onScrollNav={onScrollNav} />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
