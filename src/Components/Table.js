import React, { useState } from "react";
import TableData from "./Tabledata";
import Drawer from "./Drawer";
import Form from "./Form";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[1344px] h-[868px]  top-[116px] left-[96px]  px-[52px]">
      <div className="flex justify-between p-[16px]">
        <div className="w-[169px] h-[36px] px-[8px] py-[12px]">show items</div>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="w-[169px] h-[36px] px-[8px] py-[12px] bg-black text-white rounded-lg "
          >
            + Add Customer{" "}
          </button>
        </div>
      </div>
      <div className="w-[1212px] h-[689px]  ">
        <TableData />
      </div>

      <div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
         <Form/>
        </Drawer>
      </div>
    </div>
  );
};

export default Table;
