"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TfsaData } from "@/interface/tfsaData";
import useTfsaData from "@/lib/hooks/tfsaData";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Calendar, TrendingUp } from "lucide-react";

export default function TfsaCalculator(props: { ref: any }) {
  let { data: tfsaTable, isLoading: loading } = useTfsaData();
  const currentYear = new Date().getFullYear();
  const [userBirthYear, setUserBirthYear] = useState<number>(currentYear - 25);
  const [tab, setTab] = useState<string>("tfsa");

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow empty input for editing
    if (value === "") {
      return;
    }

    const year = parseInt(value, 10);

    // Validate: must be a number, between 1900 and current year
    if (!isNaN(year) && year >= 1900 && year <= currentYear) {
      setUserBirthYear(year);
    }
  };

  let contributionLimit = useMemo((): number => {
    let yearWhen18 = userBirthYear + 18;

    return tfsaTable
      .filter((item: TfsaData) => item.year >= yearWhen18)
      .reduce((accum, item) => item.amount + accum, 0);
  }, [userBirthYear, tfsaTable]);

  if (loading) return <></>;

  return (
    <section ref={props.ref} className="w-full px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Calculate Your {tab.toUpperCase()} Contribution Room
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Calculator Card */}
        <Card className="w-full lg:w-96 shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
          <Tabs defaultValue={tab} onValueChange={(value) => setTab(value)}>
            <TabsList className="px-3 mx-auto">
              <TabsTrigger value="tfsa">TFSA</TabsTrigger>
              <TabsTrigger value="fhsa">FHSA</TabsTrigger>
              <TabsTrigger value="rrsp">RRSP</TabsTrigger>
            </TabsList>
            <TabsContent value="tfsa">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="w-6 h-6 text-green-600" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    What year were you born?
                  </label>
                  <Input
                    type="number"
                    min="1900"
                    max={currentYear}
                    onChange={handleYearChange}
                    className="text-lg"
                    placeholder="e.g., 1990"
                  />
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Your Total Contribution Room
                    </span>
                  </div>
                  <div className="text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ${contributionLimit.toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Based on eligibility starting age 18
                  </p>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="fhsa">
              <CardHeader>
                <CardTitle className="text-2xl">
                  FHSA - First Home Savings Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Contribution limit: $8,000 per year — a fixed annual cap that
                  does not depend on your income.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  These annual contributions accumulate toward a lifetime FHSA
                  cap (e.g., $40,000); once the lifetime limit is reached no
                  further contributions are allowed. Check your CRA account or
                  Notice of Assessment for your exact available room.
                </p>
              </CardContent>
            </TabsContent>

            <TabsContent value="rrsp">
              <CardHeader>
                <CardTitle className="text-2xl">
                  RRSP - Registered Retirement Savings Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Contribution room is generally 18% of your previous year's
                  earned income (up to the government's annual dollar limit).
                  Your Notice of Assessment or CRA account shows the exact
                  dollar limit and your available room.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Unused RRSP room carries forward indefinitely. Employer
                  pension adjustments (PAs) and prior contributions reduce your
                  available room, so verify the exact amount before
                  contributing.
                </p>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Table Card */}
        <Card className="w-full lg:flex-1 max-w-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              TFSA Contribution Limits by Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto max-h-150 rounded-lg border border-gray-200 dark:border-gray-700">
              <Table>
                <TableHeader className="sticky top-0 bg-green-50 dark:bg-green-950/50">
                  <TableRow>
                    <TableHead className="text-center font-semibold text-green-900 dark:text-green-100">
                      Year
                    </TableHead>
                    <TableHead className="text-center font-semibold text-green-900 dark:text-green-100">
                      Annual Limit
                    </TableHead>
                    <TableHead className="text-center font-semibold text-green-900 dark:text-green-100">
                      Cumulative Total
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tfsaTable.map((item: TfsaData, _index: number) => {
                    const isEligible = item.year >= userBirthYear + 18;
                    return (
                      <TableRow
                        key={item.year}
                        className={`${
                          isEligible
                            ? "bg-green-50/50 dark:bg-green-950/20 font-medium"
                            : "opacity-40"
                        } hover:bg-green-100/50 dark:hover:bg-green-900/20 transition-colors`}
                      >
                        <TableCell className="text-center">
                          {item.year}
                        </TableCell>
                        <TableCell className="text-center font-semibold text-green-700 dark:text-green-400">
                          ${item.amount.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-center font-semibold text-emerald-700 dark:text-emerald-400">
                          ${item.accumulatedAmount.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
