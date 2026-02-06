"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FinanceExplanation() {
  return (
    <div className="mx-auto my-14 w-max">
      <div className="flex flex-row gap-10">
        <Card className="w-min">
          <CardHeader>
            <CardTitle>1. Choose an Online Brokerage</CardTitle>
          </CardHeader>
          <CardContent>
            A platform where you can invest money. Such as the big 5 banks -
            CIBC, TD, or online trading platforms like Wealthsimple, NBDB
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>1. Choose an Online Brokerage</CardTitle>
            <CardDescription>
              A platform where you can invest money. Such as the big 5 banks -
              CIBC, TD, or online trading platforms like Wealthsimple, NBDB
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
