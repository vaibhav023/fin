"use client";

import { reportDetail } from "@/app/tableData/report_data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<reportDetail>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "report_name",
    header: "Report Name",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "generated_at",
    header: "Generated At",
  },

 
];
