import {
  Calculator,
  ClipboardCheck,
  Users,
  BarChart3,
} from "lucide-react";

const highlights = [
  {
    icon: Calculator,
    title: "Accurate Estimation",
    description:
      "Calculate wood quantities and pricing with dedicated cut-size and round-size estimation tools.",
  },
  {
    icon: ClipboardCheck,
    title: "Organized Workflow",
    description:
      "Keep estimates, orders, delivery checklists, and business activities organized in one place.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Maintain customer information and quickly access the details you need for every estimate.",
  },
  {
    icon: BarChart3,
    title: "Business Overview",
    description:
      "Get a clear view of estimates, sales, advances, pending balances, and subscription information.",
  },
];

export default function LandingAbout() {
  return (
    <section
      id="about"
      className="bg-[#F7E9D5] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
            What is Timest?
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
            Built for the way timber businesses work
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#432818]/65">
            Timest is a timber business management platform designed to
            simplify estimation, customer management, order tracking, and
            everyday business operations.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-[#B87333]/20 bg-white/55 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333]/40 hover:bg-white/75 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B87333]/10 transition-colors group-hover:bg-[#B87333]/15">
                  <Icon className="h-6 w-6 text-[#B87333]" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#432818]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#432818]/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}