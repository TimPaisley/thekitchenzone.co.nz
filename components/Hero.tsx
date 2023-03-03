import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/ArrowRight";
import heroImage from "../public/images/p-kitchen3.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative shadow-xl">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover object-center overflow-hidden"
        alt="A background picture a kitchen designed and installed by The Kitchen Zone"
        placeholder="blur"
        src={heroImage}
      />

      <div className="absolute bg-black/75 w-full h-full" />
      <div className="relative py-16 sm:py-28 max-w-3xl m-auto flex flex-col justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-red-700">
          Kitchens, vanities and furniture
        </h1>

        <h2 className="text-3xl font-semibold">from Tauranga, New Zealand</h2>

        <p className="text-xl my-8">
          Over three decades of experience delivering contemporary, timeless
          kitchens tailored to your needs.
        </p>

        <div className="hidden sm:flex justify-center space-x-4">
          <Button href="https://www.facebook.com/kitchenzonetauranga">
            Find us on Facebook
          </Button>
          <Button href="mailto:admin@thekitchenzone.co.nz" type="secondary">
            <span>or email us</span>
            <ArrowRight />
          </Button>
        </div>

        <div className="sm:hidden m-auto">
          <Button href="tel:+640272721833">Call us now</Button>
        </div>
      </div>
    </section>
  );
}
