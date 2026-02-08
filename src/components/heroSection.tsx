"use client";

import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";

export default function HeroSection(props: { calculatorCallback: Function }) {
  return (
    <div className="w-full">
      {/* Hero Content */}
      <div className="flex flex-row gap-6 mt-12">
        <section className="text-right space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/20 rounded-full text-sm font-medium text-green-700 dark:text-green-300 mb-4">
            <PiggyBank className="w-4 h-4" />
            <span>Canadian TFSA & Savings Tracker</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Know Your{" "}
            <span className="bg-linear-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Contribution Room
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Track your TFSA contribution limits, monitor your savings accounts,
            and maximize your tax-free investment potential with ease.
          </p>

          <Button onClick={() => props.calculatorCallback()}>
            See Your Contribution Room
          </Button>
        </section>

        <section className="mx-auto my-auto">
          <div className="text-[200px] font-bold bg-[url('cats/friday-pay-day.gif')] bg-clip-text text-transparent bg-cover bg-center">
            $$$
          </div>
        </section>
      </div>
    </div>
  );
}
