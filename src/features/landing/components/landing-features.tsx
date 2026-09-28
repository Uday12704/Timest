import {
  Calculator,
  FileText,
  History,
  Users,
  Truck,
  Bell,
  Headphones,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Smart Wood Estimation",
    description:
      "Create accurate estimates using dimensions, wood types, quantities, lengths, and pricing.",
  },
  {
    icon: FileText,
    title: "Cut & Round Size Estimates",
    description:
      "Create estimates specifically for cut-size and round-size timber calculations.",
  },
  {
    icon: History,
    title: "Estimate History",
    description:
      "Keep your previous estimates organized and quickly find the information you need.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Store and manage customer information alongside your business estimates.",
  },
  {
    icon: Truck,
    title: "Delivery Checklist",
    description:
      "Keep track of delivery requirements and make sure every order is ready to go.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Stay informed about important announcements and account-related updates.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Create support requests and communicate with the Timest support team.",
  },
  {
    icon: Settings,
    title: "Business Settings",
    description:
      "Configure your business information and personalize your Timest experience.",
  },
];

export default function LandingFeatures() {
  return (
    <section
      id="features"
      className="border-y border-[#B87333]/10 bg-white/30 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
            Everything you need to manage your timber business
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#432818]/65">
            From creating your first estimate to managing customers and
            deliveries, Timest brings the essential tools together in one
            platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-[#B87333]/15 bg-[#F7E9D5]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333]/40 hover:bg-[#F7E9D5] hover:shadow-lg"
              >
                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#B87333]/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#432818]">
                      <Icon className="h-5 w-5 text-[#F7E9D5]" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-[#432818]/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#B87333]" />
                  </div>

                  <h3 className="mt-6 font-semibold text-[#432818]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#432818]/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}