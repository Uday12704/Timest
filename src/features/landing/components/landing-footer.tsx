import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Tutorials", href: "/tutorials" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const supportLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Login", href: "/login" },
];

export default function LandingFooter() {
  return (
    <footer className="border-t border-[#B87333]/15 bg-[#F7E9D5]">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#432818]"
            >
              <img src="logo.png" alt="logo" className="w-30"/>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#432818]/55">
              A simple and practical platform for managing timber
              estimates, customers, deliveries, and everyday business
              operations.
            </p>

            <a
              href="mailto:support@timest.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#432818]/70 transition-colors hover:text-[#B87333]"
            >
              <Mail className="h-4 w-4" />
              timestbusiness@gmail.com
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[#432818]">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#432818]/55 transition-colors hover:text-[#B87333]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#432818]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#432818]/55 transition-colors hover:text-[#B87333]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-[#432818]">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-[#432818]/55 transition-colors hover:text-[#B87333]"
                  >
                    {link.label}

                    {(link.href === "/faqs" ||
                      link.href === "/tutorials") && (
                      <ArrowUpRight className="h-3 w-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#B87333]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#432818]/45">
            © {new Date().getFullYear()} Timest. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/faqs"
              className="text-xs text-[#432818]/45 transition-colors hover:text-[#B87333]"
            >
              FAQs
            </Link>

            <Link
              href="/tutorials"
              className="text-xs text-[#432818]/45 transition-colors hover:text-[#B87333]"
            >
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}