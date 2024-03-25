"use client";

import { useWallet } from "@/hooks/useWallet";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const NavBar = () => {
  const { address, connectWithKeplr, connectWithMetatmask, loading } =
    useWallet();

    console.log(address, "address")

  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl font-black">aD</div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {address ? (
            <Button className="font-sans text-sm uppercase p-3 px-6 pt-2 text-white font-bold bg-green-400/60 rounded-md hover:bg-white  hover:text-black lg:flex">
              <span className="mr-3">
                {`${address?.slice(0, 5)}...${address?.slice(37)}`}
              </span>
            </Button>
          ) : (
            <Button className="bg-gray p-3 text-sm border rounded-md">
              Connect
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="p-5">Leap</DropdownMenuItem>
          <DropdownMenuItem onClick={() => connectWithKeplr()} className="p-5">
            Keplr
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => connectWithMetatmask()}
            className="p-5"
          >
            Metamask
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar;
