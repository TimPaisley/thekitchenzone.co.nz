import featureImage from "../public/images/b-kitchen1.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="my-16 max-w-5xl m-auto flex border rounded-xl"
    >
      <Image
        className="w-full rounded-l-xl object-cover"
        alt="A picture of a kitchen"
        placeholder="blur"
        src={featureImage}
      />

      <div className="p-8">
        <p className="font-bold text-red-500">About</p>
        <h2 className="text-3xl font-semibold mb-4">
          Award winning joinery in a league of its own
        </h2>
        <h3 className="text-gray-700">
          Whether you're on a tight budget or looking for a state-of-the-art
          solution, we can take your dreams from concept to reality.
        </h3>

        <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-8">
          <Feature
            title="Superior quality"
            content="We are qualified and focused tradespeople, with an eye for detail."
          />
          <Feature
            title="Cost efficient"
            content="We work with your budget, making sure you get the same quality regardless of cost."
          />
          <Feature
            title="Unbeatable experience"
            content="With over 30 years in the joinery industry, we have the skills to meet your expectations."
          />
          <Feature
            title="Everything sorted"
            content="We'll organise and manage all the tradies for you, from start to finish."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  title: string;
  content: string;
}

function Feature({ title, content }: FeatureProps) {
  return (
    <div className="border-l px-4">
      <h3 className="text-md font-bold mb-4">{title}</h3>
      <h4 className="text-sm">{content}</h4>
    </div>
  );
}
