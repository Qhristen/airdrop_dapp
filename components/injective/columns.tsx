"use client";


import { Transaction } from "@/_types";
import { ColumnDef } from "@tanstack/react-table";

import moment from "moment";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "address_from",
    header: "From",
  },
  {
    accessorKey: "address_to",
    header: "To",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <div className="">
        {moment(row.original.createdAt).format("Do MMM, YYYY")}
      </div>
    ),
  },


];
