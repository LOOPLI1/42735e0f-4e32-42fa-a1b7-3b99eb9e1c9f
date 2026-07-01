import Navbar from "@/components/blocks/navbar";
import FooterColumns from "@/components/blocks/footer-columns";
import AboutSplit from "@/components/blocks/about-split";
import AboutValues from "@/components/blocks/about-values";

export const metadata = {
  title: "Excavator Hire Wollongong",
};

export default function AboutPage() {
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
      <AboutSplit
        heading="Small Business. Big Reliability."
        body="Excavator Hire Wollongong is a locally owned and operated rental company serving tradies and construction businesses across the Illawarra. We hire out a single, well-maintained excavator on a day-rate basis — always clean, serviced, and ready to work. We keep things simple so you can focus on getting the job done."
        image="/images/about.jpg"
        imageAlt="Well-maintained excavator ready for hire in Wollongong"
        stats={[
          { label: "Dedicated Excavator", value: "1", suffix: "" },
          { label: "Fully Insured", value: "100", suffix: "%" },
          { label: "Hidden Fees", value: "0", suffix: "" },
        ]}
      />
      <AboutValues
        heading="Why Tradies Choose Us"
        subheading="We're a no-fuss operation built on reliability, transparency, and getting the job done."
        items={[
          {
            title: "Always Ready",
            description:
              "Our excavator is cleaned, serviced, and ready for hire — no surprises on the day of your job.",
          },
          {
            title: "Straightforward Pricing",
            description:
              "Simple day-rate hire with no hidden fees. Know exactly what you're paying before you book.",
          },
          {
            title: "Local & Reliable",
            description:
              "We're based in the Wollongong region and know the local market. We're easy to reach and quick to respond.",
          },
        ]}
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
