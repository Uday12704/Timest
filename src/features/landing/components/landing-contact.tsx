import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function LandingContact() {
  return (
    <section
      id="contact"
      className="bg-[#F7E9D5] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
              Let's talk about your business
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#432818]/65">
              Have a question about Timest, subscriptions, or how the
              platform can fit into your timber business? We'd love to
              hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B87333]/10">
                  <Mail className="h-5 w-5 text-[#B87333]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#432818]">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-[#432818]/55">
                    support@timest.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B87333]/10">
                  <Phone className="h-5 w-5 text-[#B87333]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#432818]">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-[#432818]/55">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B87333]/10">
                  <MapPin className="h-5 w-5 text-[#B87333]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#432818]">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-[#432818]/55">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-[#B87333]/20 bg-white/65 p-7 shadow-sm sm:p-9">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#432818]"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-xl border border-[#B87333]/20 bg-[#F7E9D5]/50 px-4 text-sm text-[#432818] outline-none transition-all placeholder:text-[#432818]/35 focus:border-[#B87333] focus:ring-2 focus:ring-[#B87333]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#432818]"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-xl border border-[#B87333]/20 bg-[#F7E9D5]/50 px-4 text-sm text-[#432818] outline-none transition-all placeholder:text-[#432818]/35 focus:border-[#B87333] focus:ring-2 focus:ring-[#B87333]/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#432818]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What would you like to know?"
                  className="h-12 w-full rounded-xl border border-[#B87333]/20 bg-[#F7E9D5]/50 px-4 text-sm text-[#432818] outline-none transition-all placeholder:text-[#432818]/35 focus:border-[#B87333] focus:ring-2 focus:ring-[#B87333]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#432818]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-[#B87333]/20 bg-[#F7E9D5]/50 px-4 py-3 text-sm text-[#432818] outline-none transition-all placeholder:text-[#432818]/35 focus:border-[#B87333] focus:ring-2 focus:ring-[#B87333]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#432818] px-6 text-sm font-semibold text-[#F7E9D5] transition-all hover:bg-[#B87333] hover:shadow-lg cursor-pointer"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}