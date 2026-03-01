"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RrspTab from "@/components/rrspTab";
import { useState } from "react";
import TfsaTab from "@/components/tfsaTab";
import FhsaTab from "@/components/fhsaTab";

export default function TfsaCalculator(props: { ref: any }) {
  const [tab, setTab] = useState<string>("tfsa");

  return (
    <section ref={props.ref} className="w-full px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Calculate Your {tab.toUpperCase()} Contribution Room
      </h2>

      <Tabs defaultValue={tab} onValueChange={(value) => setTab(value)}>
        <TabsList className="px-3 mx-auto mb-8">
          <TabsTrigger value="tfsa">TFSA</TabsTrigger>
          <TabsTrigger value="fhsa">FHSA</TabsTrigger>
          <TabsTrigger value="rrsp">RRSP</TabsTrigger>
        </TabsList>

        <TabsContent value="tfsa">
          <TfsaTab />
        </TabsContent>

        <TabsContent value="fhsa">
          <FhsaTab />
        </TabsContent>

        <TabsContent value="rrsp">
          <RrspTab />
        </TabsContent>
      </Tabs>
    </section>
  );
}
