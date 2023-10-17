"use client";

import { Detail } from "@/app/tableData/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Detail>[] = [
  {
    accessorKey: "Order ID",
    header: "Order ID",
  },
  {
    accessorKey: "Transaction ID",
    header: "Transaction ID",
  },
  {
    accessorKey: "Customer Name",
    header: "Customer Name",
  },
  {
    accessorKey: "Customer Email",
    header: "Customer Email",
  },

  {
    accessorKey: "Amount",
    header: "Amount",
  },
  {
    accessorKey: "Reference ID",
    header: "Reference ID",
  },
];
