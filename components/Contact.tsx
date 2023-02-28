export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl m-auto flex space-x-4 pt-16">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Get in touch</h2>
        <h3 className="text-gray-700">
          Tell us what you're after and we can tell you how we can help
        </h3>
      </div>
      <div className="flex-1">
        <ContactCard
          name="Ted Paisley"
          email="ted@thekitchenzone.co.nz"
          number="(+64) 027 272 1833"
        />
        <ContactCard
          name="David Henderson"
          email="production@thekitchenzone.co.nz"
          number="(+64) 027 123 4567"
        />
      </div>
      <div className="flex-1">
        <ContactCard
          name="Alice Badger"
          email="design@thekitchenzone.co.nz"
          number="(+64) 027 123 4567"
        />
        <ContactCard
          name="Tim Paisley"
          email="tim@thekitchenzone.co.nz"
          number="(+64) 027 557 1462"
        />
      </div>
    </section>
  );
}

interface ContactCardProps {
  name: string;
  email: string;
  number: string;
}

function ContactCard({ name, email, number }: ContactCardProps) {
  return (
    <div className="p-8 bg-gray-50 rounded-lg mb-4">
      <p className="font-bold mb-4">{name}</p>
      <a className="underline" href={`mailto:${email}`}>
        {email}
      </a>
      <p>{number}</p>
    </div>
  );
}
