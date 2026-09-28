import LandingNavbar from "@/features/landing/components/landing-navbar";
import LandingHero from "@/features/landing/components/landing-hero";
import LandingAbout from "@/features/landing/components/landing-about";
import LandingFeatures from "@/features/landing/components/landing-features";
import LandingPlans from "@/features/landing/components/landing-plans";
import LandingTutorials from "@/features/landing/components/landing-tutorials";
import LandingTestimonials from "@/features/landing/components/landing-testimonials";
import LandingContact from "@/features/landing/components/landing-contact";
import LandingFooter from "@/features/landing/components/landing-footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F7E9D5]">
      <LandingNavbar />

      <main>
        <LandingHero />
        <LandingAbout />
        <LandingFeatures />
        <LandingPlans />
        <LandingTutorials />
        <LandingTestimonials />
        <LandingContact />
      </main>

      <LandingFooter />
    </div>
  );
}