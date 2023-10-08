import React from "react";

const Layout = ({element}) => {
  return (
    <div className="container">
      <div className="wrapper">
        {/* <Navbar /> */}
        {element}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
