import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/app/tableData/data";

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Transaction Details",
      columns: [
        { label: "Order ID", value: "Order ID" },
        { label: "Transaction ID", value: "Transaction ID" },
        { label: "Customer Name", value: "Customer Name" },
        { label: "Customer Email", value: "Customer Email" },
        { label: "Reference ID", value: "Reference ID " },
        { label: "Amount", value: "Amount" },
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: "Transaction Details",
  };

  xlsx(columns, settings);
}
