"use client";
import useTfsaData from "@/lib/hooks/tfsaData";

export default function TfsaCalculator() {
  const { data: tfsaTable } = useTfsaData();

  console.log(tfsaTable);

  return <></>;
}
