"use client";

import { downloadToExcel } from "@/lib/xlsx";
import { Button } from "../ui/button";
import { DataTable } from "@/app/(dashboard)/settlements/data-table";
import { columns } from "@/app/(dashboard)/settlements/columns";
import { data } from "@/app/tableData/data";

type Props = {};

const Data = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

const settlementTable = () => {
  return (
    <>
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col">
          <h1 className="text-[28px]">Settlements</h1>
          <p className="text-[16px] text-[#7D8398]">
            An Overview of all your settlements
          </p>
        </div>
        <div className="flex flex-row">
          <Button
            onClick={() => downloadToExcel()}
            className="primary-gradient min-h-[42px] px-4 py-3 !text-light-900"
          >
            Export
          </Button>
        </div>
      </div>
      <Data></Data>
    </>
  );
};

export default settlementTable;
