import HeroSection from "@/components/heroSection";
import FinanceExplanation from "@/components/financeExplanation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 font-sans dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-center py-10 px-6 md:px-16">
        <HeroSection />
        <FinanceExplanation />
      </main>
    </div>
  );
}
