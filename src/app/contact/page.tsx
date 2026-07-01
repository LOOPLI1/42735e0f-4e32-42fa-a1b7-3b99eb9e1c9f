import Navbar from "@/components/blocks/navbar";
import FooterColumns from "@/components/blocks/footer-columns";
import ContactForm from "@/components/blocks/contact-form";
import ContactMap from "@/components/blocks/contact-map";

export const metadata = {
  title: "Excavator Hire Wollongong",
};

export default function ContactPage() {
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
      <ContactForm
        heading="Book Your Excavator Today"
        subheading="Ready to hire? Call us, send an email, or fill out the enquiry form below and we'll get back to you fast."
        formCta="Send Your Enquiry"
      />
      <ContactMap
        heading="Find Us"
        address="Wollongong, NSW 2500"
        phone="02 0000 0000"
        email="info@excavatorhirewollongong.com.au"
        hours="Mon–Fri: 7:00am – 5:00pm | Sat: 7:00am – 12:00pm | Sun: Closed"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0!2d150.8931!3d-34.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI1JzQwLjEiUyAxNTDCsDUzJzM1LjIiRQ!5e0!3m2!1sen!2sau!4v1680000000000!5m2!1sen!2sau"
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
