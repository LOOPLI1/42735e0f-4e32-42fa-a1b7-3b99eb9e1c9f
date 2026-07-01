import Navbar from "@/components/blocks/navbar";
import FooterColumns from "@/components/blocks/footer-columns";
import HeroSplit from "@/components/blocks/hero-split";
import ServicesGrid from "@/components/blocks/services-grid";
import TrustBadges from "@/components/blocks/trust-badges";
import CtaBanner from "@/components/blocks/cta-banner";

export const metadata = {
  title: "Excavator Hire Wollongong",
};

export default function HomePage() {
  return (
    <>
      <Navbar
        logo="Excavator Hire Wollongong"
        logoHref="/"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" },
        ]}
        cta="Get a Free Quote"
        ctaHref="/contact"
      />
      <HeroSplit
        headline="Excavator Hire in Wollongong & Surrounds"
        subheadline="Reliable day-rate excavator rental for trades and construction companies across Wollongong, Shellharbour, Kiama and beyond."
        cta="Get a Free Quote"
        ctaHref="/contact"
        image="/images/hero.jpg"
        imageAlt="Excavator on a construction site in Wollongong"
        trustBadge="Trusted by tradies and construction crews across the Illawarra"
      />
      <ServicesGrid
        heading="What We Offer"
        subheading="Simple, no-fuss excavator hire built around the needs of working tradies and construction companies."
        items={[
          {
            icon: "calendar",
            title: "Day Rate Hire",
            description: "Flexible excavator rental charged by the day, so you only pay for what you need.",
          },
          {
            icon: "hard-hat",
            title: "Self-Operated Hire",
            description: "Bring your own qualified operator and get straight to work with our well-maintained machine.",
          },
          {
            icon: "map-pin",
            title: "Local Coverage",
            description: "Servicing Wollongong, Shellharbour, Kiama and surrounding suburbs across the Illawarra region.",
          },
        ]}
      />
      <TrustBadges
        items={[
          { icon: "home", label: "Locally Owned & Operated" },
          { icon: "shield-check", label: "Fully Insured" },
          { icon: "wrench", label: "Clean & Serviced Machine" },
          { icon: "tag", label: "Simple Day-Rate Pricing" },
          { icon: "check-circle", label: "No Hidden Fees" },
        ]}
      />
      <CtaBanner
        heading="Ready to Book Your Excavator?"
        subheading="Get in touch today for fast, flexible excavator hire across Wollongong, Shellharbour, Kiama and the wider Illawarra region."
        cta="Get a Free Quote"
        ctaHref="/contact"
      />
      <FooterColumns
        logo="Excavator Hire Wollongong"
        blurb="Excavator Hire Wollongong provides simple, day-rate excavator rental to tradies and construction companies across Wollongong, Shellharbour, Kiama, and the wider Illawarra region."
        email="info@excavatorhirewollongong.com.au"
        phone="02 0000 0000"
        columns={[
          {
            heading: "Pages",
            links: [
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ],
          },
          {
            heading: "Services",
            links: [
              { href: "/services", label: "Day Rate Hire" },
              { href: "/services", label: "Self-Operated Hire" },
              { href: "/services", label: "Flexible Booking" },
              { href: "/services", label: "Local Delivery" },
            ],
          },
          {
            heading: "Service Areas",
            links: [
              { href: "/contact", label: "Wollongong" },
              { href: "/contact", label: "Shellharbour" },
              { href: "/contact", label: "Kiama" },
              { href: "/contact", label: "Dapto" },
              { href: "/contact", label: "Fairy Meadow" },
            ],
          },
        ]}
        copyright="© 2026 Excavator Hire Wollongong. All rights reserved."
      />
    </>
  );
}
