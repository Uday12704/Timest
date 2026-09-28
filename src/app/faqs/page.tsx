import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is Timest?",
    answer:
      "Timest is a timber business management platform designed to simplify wood estimation, customer management, delivery tracking, notifications, and everyday business operations.",
  },
  {
    question: "What types of estimates can I create?",
    answer:
      "Timest supports cut-size estimates, round-size estimates, and custom estimates. Each estimate can contain the relevant dimensions, wood details, quantities, pricing, charges, notes, and totals.",
  },
  {
    question: "Can I view my previous estimates?",
    answer:
      "Yes. Timest provides an estimate history where you can find your previous estimates and access available preview and editing options.",
  },
  {
    question: "Can I manage my customers in Timest?",
    answer:
      "Yes. The Customers section allows you to maintain customer information and use those details as part of your business workflow.",
  },
  {
    question: "Does Timest support delivery management?",
    answer:
      "Yes. Timest includes a Delivery Checklist that helps you organize and track delivery-related requirements for your orders.",
  },
  {
    question: "Can I receive notifications?",
    answer:
      "Yes. Timest includes a notification system for important announcements and account-related information.",
  },
  {
    question: "Can I contact Timest support?",
    answer:
      "Yes. The Customer Support section allows subscribers to create support requests and communicate with the support team.",
  },
  {
    question: "Can multiple people use the same Timest account?",
    answer:
      "Timest supports multiple profiles within a subscriber account, allowing the account owner to manage additional user profiles according to the account's available configuration.",
  },
  {
    question: "How do I access Timest?",
    answer:
      "Use the Login button on the Timest website and sign in using your account credentials. After authentication, you will be taken to the appropriate area of the application.",
  },
  {
    question: "Where can I learn how to use Timest?",
    answer:
      "Visit the Tutorials page for step-by-step guides covering estimates, customers, deliveries, settings, support, and other parts of the Timest application.",
  },
];

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-[#F7E9D5]">
      {/* Header */}
      <header className="border-b border-[#B87333]/20 bg-[#F7E9D5]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#432818]"
          >
            <img src="logo.jpeg" alt="logo" className="w-20 h-12"/>
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
      <section className="px-6 pb-16 lg:px-8 lg:pb-20 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B87333]/10">
              <HelpCircle className="h-7 w-7 text-[#B87333]" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
              Frequently Asked Questions
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl lg:text-6xl">
              Everything you need to know about <span className="text-wood-primary">Timest</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#432818]/65">
              Find answers to common questions about estimates, customers,
              deliveries, support, and using the Timest platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[#B87333]/20 bg-white/55 transition-all duration-300 open:border-[#B87333]/40 open:bg-white/75 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 text-sm font-semibold text-[#B87333]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-semibold text-[#432818]">
                    {faq.question}
                  </span>
                </div>

                <ChevronDown className="h-5 w-5 shrink-0 text-[#432818]/40 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="px-6 pb-6 pl-[4.5rem]">
                <p className="max-w-3xl text-sm leading-7 text-[#432818]/60">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#B87333]/15 bg-white/40 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#432818] sm:text-4xl">
            Still have questions?
          </h2>

          <p className="mt-5 text-[#432818]/60">
            Learn more through our tutorials or get in touch with the
            Timest team.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#B87333]/40 px-6 py-3.5 text-sm font-semibold text-[#432818] transition-all hover:border-[#B87333] hover:bg-[#F7E9D5]"
            >
              Explore Tutorials
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#432818] px-6 py-3.5 text-sm font-semibold text-[#F7E9D5] transition-all hover:bg-[#B87333]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#B87333]/15 bg-[#F7E9D5] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#432818]/45">
            © {new Date().getFullYear()} Timest. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/tutorials"
              className="text-[#432818]/45 transition-colors hover:text-[#B87333]"
            >
              Tutorials
            </Link>

            <Link
              href="/"
              className="text-[#432818]/45 transition-colors hover:text-[#B87333]"
            >
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}