"use client";
import CurrentLocation from "@/components/shared/CurrentLocation";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { Detail } from "@/app/tableData/data";
import { DataTable } from "./data-table";
import React from "react";
import { report_data } from "@/app/tableData/report_data";
import { downloadToExcel } from "@/lib/xlsx";

type Props = {};

const Data = (props: Props) => {
  return (
    <div className="container py-10 mx-auto">
      <DataTable columns={columns} data={report_data} />
    </div>
  );
};
const Reports = () => {
  return (
    <div className="bg-[#FAFBFC] p-5">
      <CurrentLocation />
      <div className="flex flex-row justify-between mt-8">
        <div className="flex flex-col">
          <h1 className="text-[28px]">Reports</h1>
          <p className="text-[16px] text-[#7D8398]">
            An Overview of all your reports
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
    </div>
  );
};

export default Reports;
