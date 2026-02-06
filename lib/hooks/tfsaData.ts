"use client";

import { useEffect, useState } from "react";

export default function useTfsaData() {
  const [tfsaTable, setTfsaTable] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const data = await fetch("/data/tfsa.json");
      setTfsaTable(await data.json());
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return {
    data: tfsaTable,
    isLoading: isLoading,
  };
}
