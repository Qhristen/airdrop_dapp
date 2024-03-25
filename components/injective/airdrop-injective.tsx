"use client";

import React, { useState } from "react";
import DatePicker from "../calendar";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval, format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DataTable } from "../ui/data-table";
import { columns } from "./columns";
import { TransactionData } from "@/dummy-data";
import { Transaction } from "@/_types";
import moment from "moment";
import { Send } from "lucide-react";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const AirdropInjective = () => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const filteredData = TransactionData.filter((txn) => {
    const _txnDate = moment(txn.createdAt).format("Do MMM, YYYY");
    const _starteDate = moment(dateRange.startDate).format("Do MMM, YYYY");
    return _txnDate === _starteDate;
  });

  const _setDateRange = (selection: any) => {
    const newStartDate = new Date(selection.startDate);
    const newEndDate = new Date(selection.endDate);

    if (newEndDate <= newStartDate) {
      newEndDate.setDate(newStartDate.getDate() + 1);
    }

    setDateRange({
      ...dateRange,
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };

  const getReservations = async () => {
    let dates: Date[] = [];

    TransactionData.forEach((txn: Transaction) => {
      const range = eachDayOfInterval({
        start: new Date(txn.createdAt),
        end: new Date(),
      });

      dates = [...dates, ...range];
    });

    setSelectedDates(dates);
  };

  return (
    <div className="mt-6">
      <h1 className="py-10 text-2xl font-black">Transactions</h1>
      <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="bg-gray p-3 text-sm border rounded-md">
              Select dates
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DatePicker
              onChange={(value) => _setDateRange(value.selection)}
              value={dateRange}
              selctedDates={selectedDates}
            />
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="flex items-center gap-4 bg-gray px-6 py-3 bg-green-400/60 text-sm rounded-md">
          Send Airdrop
          <Send />
        </button>
      </div>

      <div className="mt-4">
        <DataTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default AirdropInjective;
