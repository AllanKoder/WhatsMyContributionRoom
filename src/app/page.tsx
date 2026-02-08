"use client";

import HeroSection from "@/components/heroSection";
import FinanceExplanation from "@/components/financeExplanation";
import TfsaCalculator from "@/components/tfsaCalculator";
import { useRef } from "react";
export default function Home() {
  const calculatorComponent = useRef<null | HTMLElement>(null);

  let goToCalculatorComponent = () => {
    if (!calculatorComponent.current) return;
    calculatorComponent.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 font-sans dark:from-gray-950 dark:via-green-950 dark:to-emerald-950">
      {/* Hero Section - Full Screen */}
      <section className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-7xl px-6 md:px-16">
          <HeroSection calculatorCallback={goToCalculatorComponent} />
        </div>
      </section>

      {/* Finance Explanation Section */}
      <section className="relative py-20 px-6 md:px-16 border-green-400 dark:border-green-600">
        <div className="relative z-10">
          <h2 className="text-center text-5xl md:text-7xl font-extrabold mb-4 bg-linear-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
            Investing is Easy!
          </h2>
          <p className="text-center text-xl md:text-2xl text-green-700 dark:text-green-300 mb-16 font-semibold">
            🎉 Follow these simple steps and watch your money grow! 🎉
          </p>
          <FinanceExplanation />
        </div>
      </section>

      {/* Calculator Table */}
      <section className="relative py-20 max-w-7xl mx-auto">
        <TfsaCalculator ref={calculatorComponent} />
      </section>
    </div>
  );
}
