"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FinanceExplanation() {
  useEffect(() => {
    // Fire confetti when component mounts
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Green confetti from left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#10b981", "#34d399", "#6ee7b7", "#059669", "#047857"],
      });

      // Green confetti from right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#10b981", "#34d399", "#6ee7b7", "#059669", "#047857"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/cats/thinking-cat.gif"
            alt="Thinking cat"
            width={120}
            height={120}
            className="mb-4 rounded-full border-4 border-green-400 dark:border-green-600 shadow-lg"
            unoptimized
          />
          <Card
            className="w-full md:w-72 flex-shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6, x: 0.3 },
                colors: ["#10b981", "#34d399", "#6ee7b7"],
              });
            }}
          >
            <CardHeader>
              <CardTitle>1. Choose an Online Brokerage</CardTitle>
            </CardHeader>
            <CardContent>
              A platform where you can invest money. Such as the big 5 banks -
              CIBC, TD, or online trading platforms like Wealthsimple, NBDB
            </CardContent>
          </Card>
        </div>

        {/* Arrow */}
        <div className="text-5xl text-green-600 dark:text-green-400 hidden md:block animate-pulse font-bold">
          →
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/cats/cat-money.gif"
            alt="Cat with money"
            width={120}
            height={120}
            className="mb-4 rounded-full border-4 border-emerald-400 dark:border-emerald-600 shadow-lg"
            unoptimized
          />
          <Card
            className="w-full md:w-72 flex-shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6, x: 0.5 },
                colors: ["#059669", "#10b981", "#34d399"],
              });
            }}
          >
            <CardHeader>
              <CardTitle>2. Choose an Investing Account</CardTitle>
            </CardHeader>
            <CardContent>
              A place to store your money for investing purposes. Like TFSA,
              FHSA, RRSP.
            </CardContent>
          </Card>
        </div>

        {/* Arrow */}
        <div className="text-5xl text-green-600 dark:text-green-400 hidden md:block animate-pulse font-bold">
          →
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/cats/epic-fail-fall.gif"
            alt="Payday celebration cat"
            width={120}
            height={120}
            className="mb-4 rounded-full border-4 border-teal-400 dark:border-teal-600 shadow-lg"
            unoptimized
          />
          <Card
            className="w-full md:w-72 flex-shrink-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => {
              confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6, x: 0.7 },
                colors: ["#047857", "#10b981", "#34d399", "#6ee7b7"],
                scalar: 1.2,
              });
            }}
          >
            <CardHeader>
              <CardTitle>3. Invest!!!</CardTitle>
            </CardHeader>
            <CardContent>
              Find various stock options and invest! GIC's, Mutual Funds, ETFs.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
