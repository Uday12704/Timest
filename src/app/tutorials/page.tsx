import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  FileText,
  Users,
  Truck,
  Settings,
  Headphones,
  Play,
} from "lucide-react";

const tutorials = [
  {
    category: "Getting Started",
    icon: Play,
    title: "Introduction to Timest",
    description:
      "Understand what Timest is and how it can help simplify your timber business workflow.",
  },
  {
    category: "Estimates",
    icon: Calculator,
    title: "Creating a Cut-Size Estimate",
    description:
      "Learn how to create a cut-size estimate, enter wood dimensions, quantities, pricing, and calculate the total.",
  },
  {
    category: "Estimates",
    icon: Calculator,
    title: "Creating a Round-Size Estimate",
    description:
      "Learn how to create and manage a round-size wood estimate.",
  },
  {
    category: "Estimates",
    icon: FileText,
    title: "Creating a Custom Estimate",
    description:
      "Understand how custom estimates work and how to create one for your business requirements.",
  },
  {
    category: "Estimates",
    icon: FileText,
    title: "Managing Estimate History",
    description:
      "Learn how to find previous estimates, preview them, edit them, and manage your estimate history.",
  },
  {
    category: "Customers",
    icon: Users,
    title: "Managing Customers",
    description:
      "Learn how to add, view, and manage your customer information.",
  },
  {
    category: "Delivery",
    icon: Truck,
    title: "Using the Delivery Checklist",
    description:
      "Learn how to manage delivery requirements and keep track of order preparation.",
  },
  {
    category: "Settings",
    icon: Settings,
    title: "Managing Your Settings",
    description:
      "Learn how to configure your business information and customize your Timest account.",
  },
  {
    category: "Support",
    icon: Headphones,
    title: "Getting Customer Support",
    description:
      "Learn how to create a support request and communicate with the Timest support team.",
  },
];

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-[#F7E9D5]">
      {/* Header */}
      <header className="border-b border-[#B87333]/20 bg-[#F7E9D5]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#432818]"
          >
            Timest
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl bg-[#432818] px-6 py-2.5 text-sm font-semibold text-[#F7E9D5] transition-all hover:bg-[#B87333]"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24 ">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
              Tutorials
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl lg:text-6xl">
              Learn Timest step by step
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#432818]/65">
              Explore our tutorials to learn how to create estimates,
              manage customers, organize deliveries, and get the most
              out of Timest.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;

              return (
                <article
                  key={tutorial.title}
                  className="group overflow-hidden rounded-3xl border border-[#B87333]/20 bg-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333]/40 hover:bg-white/75 hover:shadow-xl"
                >
                  {/* Video */}
                  <div className="relative aspect-video bg-[#432818]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,115,51,0.25),_transparent_60%)]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B87333] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-1 h-7 w-7 fill-[#F7E9D5] text-[#F7E9D5]" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-[#F7E9D5]/10 px-3 py-1.5 text-xs text-[#F7E9D5]/70 backdrop-blur">
                      <Icon className="h-3.5 w-3.5" />
                      {tutorial.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                      {tutorial.category}
                    </p>

                    <h2 className="mt-2 text-lg font-semibold text-[#432818]">
                      {tutorial.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#432818]/60">
                      {tutorial.description}
                    </p>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B87333]"
                    >
                      Watch tutorial
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#B87333]/15 bg-white/40 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#432818] sm:text-4xl">
            Ready to simplify your timber business?
          </h2>

          <p className="mt-5 text-[#432818]/60">
            Log in to Timest and start creating smarter estimates.
          </p>

          <Link
            href="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#432818] px-7 py-3.5 text-sm font-semibold text-[#F7E9D5] transition-all hover:bg-[#B87333] hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#B87333]/15 bg-[#F7E9D5] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#432818]/45">
            © {new Date().getFullYear()} Timest. All rights reserved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#432818]/60 transition-colors hover:text-[#B87333]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Timest
          </Link>
        </div>
      </footer>
    </main>
  );
}