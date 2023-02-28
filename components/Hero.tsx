import Image from "next/image";
import Button from "./Button";
import ArrowRight from "./icons/ArrowRight";
import heroImage from "../public/images/p-kitchen3.jpg";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center text-center">
      <div className="py-28 max-w-3xl m-auto">
        <h1 className="text-5xl font-bold mb-4">
          Kitchens, vanities and furniture
        </h1>

        <h2 className="text-3xl font-semibold">from Tauranga, New Zealand</h2>

        <p className="text-xl my-8 text-gray-700">
          Find out how The Kitchen Zone can give you the best solution, tailored
          to your needs.
        </p>

        <div className="flex justify-center space-x-4">
          <Button>Find us on Facebook</Button>
          <Button type="secondary">
            <span>or email us</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <Image
        className="w-full max-w-5xl m-auto rounded-xl shadow-xl"
        alt="A picture of a kitchen"
        placeholder="blur"
        src={heroImage}
      />
    </section>
  );
}
