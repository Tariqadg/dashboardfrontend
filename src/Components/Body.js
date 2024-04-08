import React from "react";
import Dashboard from "./Dashboard";

import Navbar from "./Navbar";
import Table from "./Table";
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
  rel="stylesheet"
></link>;

const Body = () => {
  return (
    <div className="flex w-[1440px] h-[1024px] top-[-106px] left-[1032px]"
    >
      <Dashboard />
      <div>
        <Navbar />
        <Table />
      </div>
    </div>
  );
};

export default Body;
