"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TfsaData } from "@/interface/tfsaData";
import useTfsaData from "@/lib/hooks/tfsaData";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Calendar, TrendingUp } from "lucide-react";

export default function TfsaCalculator() {
  let { data: tfsaTable, isLoading: loading } = useTfsaData();
  const [userBirthYear, setUserBirthYear] = useState<number>(
    new Date().getFullYear(),
  );

  let contributionLimit = useMemo((): number => {
    let yearWhen18 = userBirthYear + 18;

    return tfsaTable
      .filter((item: TfsaData) => item.year >= yearWhen18)
      .reduce((accum, item) => item.amount + accum, 0);
  }, [userBirthYear, tfsaTable]);

  if (loading) return <></>;

  return (
    <div className="w-full px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Calculate Your TFSA Contribution Room
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Calculator Card */}
        <Card className="w-full lg:w-96 flex-shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
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
                max={new Date().getFullYear()}
                onChange={(e) => setUserBirthYear(parseInt(e.target.value))}
                value={userBirthYear}
                className="text-lg"
              />
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Your Total Contribution Room
                </span>
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ${contributionLimit.toLocaleString()}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Based on eligibility starting age 18
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Table Card */}
        <Card className="w-full lg:flex-1 max-w-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              TFSA Contribution Limits by Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto max-h-[600px] rounded-lg border border-gray-200 dark:border-gray-700">
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
                  {tfsaTable.map((item: TfsaData, index: number) => {
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
    </div>
  );
}
