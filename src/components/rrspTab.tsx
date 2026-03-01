"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Briefcase, TrendingUp } from "lucide-react";
import { useState } from "react";

// 18% of prior year income, capped at the CRA annual dollar limit
const RRSP_RATE = 0.18;
const RRSP_ANNUAL_LIMIT = 32490; // 2025 limit (applies to 2026 tax year)

export default function RrspTab() {
  const currentYear = new Date().getFullYear();
  const [income, setIncome] = useState<number | null>(null);

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setIncome(null);
      return;
    }
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      setIncome(parsed);
    }
  };

  const contributionRoom =
    income !== null
      ? Math.min(Math.floor(income * RRSP_RATE), RRSP_ANNUAL_LIMIT)
      : null;

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-96 shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Briefcase className="w-6 h-6 text-green-600" />
            Your Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              What was your earned income in {currentYear - 1}?
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                $
              </span>
              <Input
                type="number"
                min="0"
                onChange={handleIncomeChange}
                className="text-lg pl-7"
                placeholder="e.g., 75000"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Find this on your <span className="font-semibold">T4 slip (Box 14)</span> for
              employment income, or <span className="font-semibold">line 10100</span> of
              your T1 return. Self-employment and rental income count too — see
              lines 13500–14300 and 12600.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Your {currentYear} Contribution Room
              </span>
            </div>
            <div className="text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {contributionRoom !== null
                ? `$${contributionRoom.toLocaleString()}`
                : "—"}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              18% of prior year income, capped at $
              {RRSP_ANNUAL_LIMIT.toLocaleString()} for {currentYear}.
              Unused room carries forward — check your CRA account for your
              exact total.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
