import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Ruler,
  Calculator,
  TrendingUp,
} from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7E9D5]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#B87333]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#432818]/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#B87333]/5 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B87333]/30 bg-[#B87333]/10 px-4 py-2 text-sm font-medium text-[#432818]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B87333] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B87333]" />
            </span>

            Smart Timber Business Management
          </div>

          {/* Heading */}
          <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-[#432818] sm:text-6xl lg:text-7xl">
            Smarter Estimates.
            <span className="mt-2 block text-[#B87333]">
              Simpler Business.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#432818]/65">
            Timest helps timber businesses create accurate estimates,
            manage customers, track orders, and keep everyday operations
            organized — all from one simple platform.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#432818] px-7 py-3.5 font-semibold text-[#F7E9D5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B87333] hover:shadow-lg"
            >
              Get Started

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-[#B87333]/35 bg-white/30 px-7 py-3.5 font-semibold text-[#432818] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B87333] hover:bg-white/60"
            >
              Explore Features
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Easy to use",
              "Accurate calculations",
              "Business focused",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-[#432818]/65"
              >
                <CheckCircle2 className="h-4 w-4 text-[#B87333]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:150ms]">
          {/* Outer glow */}
          <div className="absolute inset-8 rounded-[2.5rem] bg-[#B87333]/10 blur-3xl" />

          {/* Dashboard */}
          <div className="relative animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-[#B87333]/25 bg-white/70 p-5 shadow-2xl backdrop-blur">
            {/* Browser header */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#B87333]/30" />
              <div className="h-3 w-3 rounded-full bg-[#B87333]/30" />
              <div className="h-3 w-3 rounded-full bg-[#B87333]/30" />

              <div className="ml-3 h-7 flex-1 rounded-lg bg-[#F7E9D5]" />
            </div>

            {/* Dashboard header */}
            <div className="rounded-2xl bg-[#432818] p-5 text-[#F7E9D5]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#F7E9D5]/55">
                    Estimate Dashboard
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    ₹24,850.00
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#B87333]">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Business overview
                  </div>
                </div>

                <div className="rounded-xl bg-[#B87333] p-3">
                  <Calculator className="h-6 w-6 text-[#F7E9D5]" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#B87333]/15 bg-[#F7E9D5]/60 p-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#B87333]/10 p-2">
                    <Ruler className="h-4 w-4 text-[#B87333]" />
                  </div>

                  <span className="text-xs text-[#432818]/55">
                    Cut Size
                  </span>
                </div>

                <p className="mt-4 text-xl font-bold text-[#432818]">
                  128.40
                </p>

                <p className="text-xs text-[#432818]/45">
                  CFT
                </p>
              </div>

              <div className="rounded-2xl border border-[#B87333]/15 bg-[#F7E9D5]/60 p-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-[#B87333]/10 p-2">
                    <Calculator className="h-4 w-4 text-[#B87333]" />
                  </div>

                  <span className="text-xs text-[#432818]/55">
                    Estimates
                  </span>
                </div>

                <p className="mt-4 text-xl font-bold text-[#432818]">
                  1,248
                </p>

                <p className="text-xs text-[#432818]/45">
                  Created
                </p>
              </div>
            </div>

            {/* Estimate list */}
            <div className="mt-5 space-y-3">
              {[
                {
                  name: "Office Furniture",
                  amount: "₹8,450",
                },
                {
                  name: "Teak Wood Order",
                  amount: "₹12,200",
                },
                {
                  name: "Dining Table",
                  amount: "₹4,200",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-[#B87333]/10 bg-white/60 px-4 py-3 transition-all duration-300 hover:border-[#B87333]/25 hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#B87333]/10" />

                    <div>
                      <p className="text-xs font-medium text-[#432818]">
                        {item.name}
                      </p>

                      <div className="mt-1.5 h-1.5 w-16 rounded-full bg-[#432818]/5" />
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#432818]/65">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating status card */}
          <div className="absolute -bottom-6 -left-5 hidden animate-[float_5s_ease-in-out_infinite_reverse] rounded-2xl border border-[#B87333]/20 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B87333]/10">
                <CheckCircle2 className="h-5 w-5 text-[#B87333]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#432818]">
                  Estimate Ready
                </p>

                <p className="mt-0.5 text-xs text-[#432818]/45">
                  Calculated automatically
                </p>
              </div>
            </div>
          </div>

          {/* Floating calculator badge */}
          <div className="absolute -right-4 -top-5 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-[#B87333]/20 bg-white p-3 shadow-lg sm:block">
            <Calculator className="h-5 w-5 text-[#B87333]" />
          </div>
        </div>
      </div>
    </section>
  );
}