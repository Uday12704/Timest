import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "For small timber businesses getting started with Timest.",
    price: "Free",
    period: "",
    features: [
      "Wood estimation",
      "Cut-size estimates",
      "Round-size estimates",
      "Estimate history",
      "Customer management",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing businesses that need a complete workflow.",
    price: "₹ 2500",
    period: "/ year",
    features: [
      "Everything in Starter",
      "Custom estimates",
      "Delivery checklist",
      "Notifications",
      "Customer support",
      "Business settings",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "For businesses managing larger day-to-day operations.",
    price: "₹ 4000",
    period: "/ year",
    features: [
      "Everything in Professional",
      "Higher estimate capacity",
      "Advanced business management",
      "Priority support",
      "Multiple user profiles",
    ],
    popular: false,
  },
];

export default function LandingPlans() {
  return (
    <section
      id="plans"
      className="bg-[#F7E9D5] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
            Subscription Plans
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
            Choose the plan that fits your business
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#432818]/65">
            Get the tools you need to simplify your timber business and
            manage your everyday workflow with Timest.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-[#B87333] bg-[#432818] text-[#F7E9D5] shadow-lg"
                  : "border-[#B87333]/20 bg-white/50 text-[#432818]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-[#B87333] px-4 py-2 text-xs font-semibold text-[#F7E9D5] shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>

                <p
                  className={`mt-3 min-h-12 text-sm leading-6 ${
                    plan.popular
                      ? "text-[#F7E9D5]/65"
                      : "text-[#432818]/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>

                  <span
                    className={`mb-1 text-sm ${
                      plan.popular
                        ? "text-[#F7E9D5]/50"
                        : "text-[#432818]/50"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/login"
                className={`mt-8 flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#B87333] text-[#F7E9D5] hover:bg-[#c9874d]"
                    : "bg-[#432818] text-[#F7E9D5] hover:bg-[#B87333]"
                }`}
              >
                Get Started
              </Link>

              {/* Features */}
              <div
                className={`my-8 h-px ${
                  plan.popular
                    ? "bg-[#F7E9D5]/15"
                    : "bg-[#B87333]/15"
                }`}
              />

              <p
                className={`text-sm font-semibold ${
                  plan.popular
                    ? "text-[#F7E9D5]"
                    : "text-[#432818]"
                }`}
              >
                What's included
              </p>

              <ul className="mt-5 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.popular
                          ? "bg-[#B87333]/20"
                          : "bg-[#B87333]/10"
                      }`}
                    >
                      <Check
                        className={`h-3.5 w-3.5 ${
                          plan.popular
                            ? "text-[#B87333]"
                            : "text-[#B87333]"
                        }`}
                      />
                    </span>

                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-[#F7E9D5]/70"
                          : "text-[#432818]/65"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-[#432818]/50">
          Need help choosing a plan?{" "}
          <Link
            href="#contact"
            className="font-semibold text-[#B87333] hover:underline"
          >
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}