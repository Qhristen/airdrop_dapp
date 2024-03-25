import { ethereum } from "@/utils/etherum";
import { keplr } from "@/utils/keplr";
import React, { useEffect, useState } from "react";

export const useWallet = () => {
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    if (address) {
      setAddress(address);
    }
  }, [address]);

  const connectWithLeap = async () => {};

  const connectWithMetatmask = async () => {
    try {
      const eth = await ethereum();
      setAddress(eth[0]);
      setLoading(true);
    } catch (error) {}
  };

  const connectWithKeplr = async () => {
    try {
      const keplr_addresses = await keplr();
      setAddress(keplr_addresses[0]?.address);
      setLoading(true);
    } catch (error) {}
  };

  return {
    address,
    loading,
    connectWithKeplr,
    connectWithLeap,
    connectWithMetatmask,
  };
};
