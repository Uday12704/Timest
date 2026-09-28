import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileText,
  Users,
  Play,
} from "lucide-react";

const tutorials = [
  {
    icon: Calculator,
    title: "Creating Your First Estimate",
    description:
      "Learn how to create a wood estimate and calculate quantities and pricing.",
  },
  {
    icon: FileText,
    title: "Managing Estimates",
    description:
      "Understand how to find, preview, edit, and manage your previous estimates.",
  },
  {
    icon: Users,
    title: "Managing Customers",
    description:
      "Learn how to organize customer information and use it with your estimates.",
  },
];

export default function LandingTutorials() {
  return (
    <section className="bg-[#F7E9D5] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
              Learn Timest
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
              Get started with simple tutorials
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#432818]/65">
              Follow step-by-step tutorials to understand how Timest can
              fit into your everyday timber business workflow.
            </p>
          </div>

          <Link
            href="/tutorials"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#B87333]/40 px-5 py-3 text-sm font-semibold text-[#432818] transition-all hover:border-[#B87333] hover:bg-white/50 lg:self-auto"
          >
            View All Tutorials
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon;

            return (
              <Link
                key={tutorial.title}
                href="/tutorials"
                className="group overflow-hidden rounded-3xl border border-[#B87333]/20 bg-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333]/40 hover:shadow-xl"
              >
                {/* Video placeholder */}
                <div className="relative flex aspect-video items-center justify-center bg-[#432818]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,115,51,0.25),_transparent_60%)]" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#B87333] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-[#F7E9D5] text-[#F7E9D5]" />
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-[#F7E9D5]/10 px-3 py-1.5 text-xs text-[#F7E9D5]/70 backdrop-blur">
                    <Icon className="h-3.5 w-3.5" />
                    Tutorial
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-[#432818]">
                    {tutorial.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#432818]/60">
                    {tutorial.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#B87333]">
                    Watch tutorial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}