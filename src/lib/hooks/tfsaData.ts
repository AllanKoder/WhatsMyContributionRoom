"use client";

import { useEffect, useState } from "react";
import { TfsaData } from "@/interface/tfsaData";

function addAccumulatedSum(data: TfsaData[]): TfsaData[] {
  data.sort((a, b) => (a.year < b.year ? 1 : -1));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].amount;
    data[i].accumulatedAmount = sum;
  }
  return data;
}

export default function useTfsaData(): {
  data: any[];
  isLoading: boolean;
} {
  const [tfsaTable, setTfsaTable] = useState<TfsaData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await fetch("/data/tfsa.json");
      setTfsaTable(await data.json());
      setIsLoading(false);
    }

    fetchData();
  }, []);

  addAccumulatedSum(tfsaTable);

  return {
    data: tfsaTable,
    isLoading: isLoading,
  };
}
