"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home, TrendingUp } from "lucide-react";
import { useState } from "react";

const FHSA_LAUNCH_YEAR = 2023;
const FHSA_ANNUAL_LIMIT = 8000;
const FHSA_LIFETIME_LIMIT = 40000;

export default function FhsaTab() {
  const currentYear = new Date().getFullYear();
  const [fhsaOpenYear, setFhsaOpenYear] = useState<number>(currentYear);
  const [tooEarlyError, setTooEarlyError] = useState<boolean>(false);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setTooEarlyError(false);
      return;
    }
    const year = parseInt(value, 10);
    if (!isNaN(year) && year < FHSA_LAUNCH_YEAR) {
      setTooEarlyError(true);
    } else if (!isNaN(year) && year >= FHSA_LAUNCH_YEAR && year <= currentYear) {
      setTooEarlyError(false);
      setFhsaOpenYear(year);
    }
  };

  const yearsSinceOpened = currentYear - fhsaOpenYear;
  const contributionRoom = Math.min(
    yearsSinceOpened * FHSA_ANNUAL_LIMIT,
    FHSA_LIFETIME_LIMIT
  );

  return (
    <div className="flex justify-center">
      <Card className="w-full lg:w-96 shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Home className="w-6 h-6 text-green-600" />
            Your Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              What year did you open your FHSA?
            </label>
            <Input
              type="number"
              min={FHSA_LAUNCH_YEAR}
              max={currentYear}
              onChange={handleYearChange}
              className="text-lg"
              placeholder="e.g., 2023"
            />
            {tooEarlyError && (
              <p className="text-sm text-red-500 dark:text-red-400">
                The FHSA didn't exist before {FHSA_LAUNCH_YEAR} — it was
                introduced by the Canadian government in April {FHSA_LAUNCH_YEAR}.
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Your Total Contribution Room
              </span>
            </div>
            <div className="text-5xl font-bold bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${contributionRoom.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {yearsSinceOpened} year{yearsSinceOpened !== 1 ? "s" : ""} since
              opening × ${FHSA_ANNUAL_LIMIT.toLocaleString()}/year (lifetime max
              ${FHSA_LIFETIME_LIMIT.toLocaleString()})
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
