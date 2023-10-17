"use client";

import { upiDetail } from "@/app/tableData/upi_data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<upiDetail>[] = [
  {
    accessorKey: "UPI_ID",
    header: "UPI ID",
  },
  {
    accessorKey: "Transaction_id",
    header: "Transaction ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },

  
];
