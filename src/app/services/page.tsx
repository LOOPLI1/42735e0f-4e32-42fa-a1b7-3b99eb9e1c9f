import Navbar from "@/components/blocks/navbar";
import FooterColumns from "@/components/blocks/footer-columns";
import ServicesAlternating from "@/components/blocks/services-alternating";
import CtaSplit from "@/components/blocks/cta-split";

export const metadata = {
  title: "Excavator Hire Wollongong",
};

export default function ServicesPage() {
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
      <ServicesAlternating
        heading="Excavator Hire Services"
        items={[
          {
            title: "Day Rate Excavator Hire",
            description:
              "Hire our excavator by the day at a competitive flat rate. Perfect for earthworks, trenching, demolition prep, landscaping, and more. Available to qualified operators across the Wollongong region.",
            image: "/images/service-day-rate.jpg",
            imageAlt: "Excavator available for day rate hire in Wollongong",
          },
          {
            title: "Self-Operated Hire",
            description:
              "Our hire is self-operated, meaning you supply the licensed and competent operator. The machine arrives clean and serviced — ready to get straight to work on your site.",
            image: "/images/service-self-operated.jpg",
            imageAlt: "Self-operated excavator hire for qualified operators",
          },
          {
            title: "Flexible Booking",
            description:
              "Need the machine for a day or several days in a row? We work around your schedule. Contact us to check availability and lock in your booking.",
            image: "/images/service-flexible.jpg",
            imageAlt: "Flexible excavator booking across Wollongong",
          },
          {
            title: "Local Delivery Area",
            description:
              "We service Wollongong, Shellharbour, Kiama, Dapto, Albion Park, Fairy Meadow, and surrounding Illawarra suburbs. Get in touch to confirm coverage in your area.",
            image: "/images/service-delivery.jpg",
            imageAlt: "Excavator delivery across Wollongong and Illawarra",
          },
        ]}
      />
      <CtaSplit
        heading="Ready to Get Started?"
        subheading="Book your excavator hire today and get a fast, competitive day rate across Wollongong and the Illawarra."
        cta="Book Your Excavator Now"
        ctaHref="/contact"
        image="/images/services-cta.jpg"
        imageAlt="Excavator ready for hire across Wollongong and Illawarra"
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
