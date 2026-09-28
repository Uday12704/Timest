import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Customer Name",
    role: "Timber Business Owner",
    content:
      "Timest has made the estimation process much easier for our day-to-day business. Everything is organized in one place.",
  },
  {
    id: "2",
    name: "Customer Name",
    role: "Timber Business Owner",
    content:
      "The ability to create estimates quickly and keep track of previous work saves us a lot of time.",
  },
  {
    id: "3",
    name: "Customer Name",
    role: "Timber Business Owner",
    content:
      "A simple and practical platform for managing timber estimates, customers, and everyday business activities.",
  },
];

export default function LandingTestimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white/40 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#432818] sm:text-5xl">
            Built to make everyday work simpler
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#432818]/60">
            See what timber business owners have to say about their
            experience with Timest.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative rounded-3xl border border-[#B87333]/20 bg-[#F7E9D5]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B87333]/40 hover:bg-white hover:shadow-xl"
            >
              <Quote className="absolute right-7 top-7 h-10 w-10 text-[#B87333]/15" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-[#B87333] text-[#B87333]"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="mt-6 text-base leading-7 text-[#432818]/70">
                “{testimonial.content}”
              </p>

              {/* Customer */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B87333] font-semibold text-[#F7E9D5]">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#432818]">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-[#432818]/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}