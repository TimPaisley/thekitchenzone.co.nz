import Envelope from "./icons/Envelope";
import MapPin from "./icons/MapPin";
import Phone from "./icons/Phone";
import Star from "./icons/Star";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl m-auto pt-16">
      <p className="font-bold text-red-500 text-center">Contact</p>
      <h1 className="text-3xl mt-0 my-8 font-semibold text-center">
        Get in touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContactCard icon={<Phone />} title="Call us">
          <a className="underline" href="tel:+640272721833">
            (+64) 027 272 1833
          </a>
        </ContactCard>
        <ContactCard icon={<Envelope />} title="Email us">
          <a className="underline" href="mailto:admin@thekitchenzone.co.nz">
            admin@thekitchenzone.co.nz
          </a>
        </ContactCard>
        <ContactCard icon={<MapPin />} title="Stop by">
          <a className="underline" href="https://goo.gl/maps/eumBeXtKDgRC5ASG9">
            67 Courtney Road, Parkvale 3112
          </a>
        </ContactCard>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
}

function ContactCard({
  icon,
  title,
  children,
}: React.PropsWithChildren<ContactCardProps>) {
  return (
    <div className="py-4 flex flex-col items-center">
      <h4 className="font-bold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h4>
      <p>{children}</p>
    </div>
  );
}
