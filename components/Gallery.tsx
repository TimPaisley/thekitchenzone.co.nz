import Image, { StaticImageData } from "next/image";
// import bKitchen1 from "../public/images/b-kitchen1.jpg";
// import bKitchen3 from "../public/images/b-kitchen3.jpg";
// import bKitchen6 from "../public/images/b-kitchen6.jpg";
import bLaundry1 from "../public/images/b-laundry1.jpg";
import bVanity1 from "../public/images/b-vanity1.jpg";
import lKitchen1 from "../public/images/l-kitchen1.jpg";
import lKitchen2 from "../public/images/l-kitchen2.jpg";
// import lKitchen4 from "../public/images/l-kitchen4.jpg";
import pKitchen2 from "../public/images/p-kitchen2.jpg";
import pKitchen3 from "../public/images/p-kitchen3.jpg";
import uKitchen1 from "../public/images/u-kitchen1.jpg";
import uKitchen2 from "../public/images/u-kitchen2.jpg";
// import uKitchen3 from "../public/images/u-kitchen3.jpg";
import uKitchen4 from "../public/images/u-kitchen4.jpg";
// import uKitchen5 from "../public/images/u-kitchen5.jpg";
import uKitchen6 from "../public/images/u-kitchen6.jpg";
import uKitchen7 from "../public/images/u-kitchen7.jpg";
import uKitchen8 from "../public/images/u-kitchen8.jpg";
import uVanity1 from "../public/images/u-vanity1.jpg";
import uVanity2 from "../public/images/u-vanity2.jpg";
import uVanity3 from "../public/images/u-vanity3.jpg";
import uVanity4 from "../public/images/u-vanity4.jpg";
import uVanity5 from "../public/images/u-vanity5.jpg";
import nKitchen1 from "../public/images/n-kitchen1.jpg";
import nKitchen2 from "../public/images/n-kitchen2.jpg";
import nKitchen3 from "../public/images/n-kitchen3.jpg";
import nKitchen4 from "../public/images/n-kitchen4.jpg";
import before1 from "../public/images/before1.jpg";
import after1 from "../public/images/after1.jpg";

import classNames from "classnames";

export default function Gallery() {
  return (
    <section id="gallery" className="pt-24 max-w-5xl m-auto">
      <p className="font-bold text-red-700 text-center">Gallery</p>
      <h1 className="text-3xl mt-0 font-semibold text-center">
        See for yourself
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">Kitchens</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={nKitchen3} sizing="big" />
        <Img src={nKitchen1} sizing="tall" />
        <Img src={nKitchen4} />
        <Img src={lKitchen1} />
        <Img src={lKitchen2} />
        <Img src={nKitchen2} />
        <Img src={uKitchen1} sizing="big" />
        <Img src={pKitchen2} />
        <Img src={pKitchen3} />
        <Img src={uKitchen6} sizing="big" />
        <Img src={uKitchen2} />
        <Img src={uKitchen4} />
        <Img src={uKitchen7} />
        <Img src={uKitchen8} />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
        Bathrooms
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={bVanity1} sizing="tall" />
        <Img src={uVanity3} />
        <Img src={uVanity1} sizing="tall" />
        <Img src={uVanity5} sizing="tall" />
        <Img src={uVanity4} />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
        Laundries
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={bLaundry1} sizing="big" />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
        Furniture
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={uVanity2} sizing="big" />
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
        Before & After
      </h2>

      <div className="flex md:space-x-4 space-x-2">
        <Image
          alt=""
          src={before1}
          className={classNames(
            "w-full lg:h-[23rem] md:h-44 lg:rounded-md object-cover"
          )}
          placeholder="blur"
        />

        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="md:w-6 md:h-6 w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>

        <Image
          alt=""
          src={after1}
          className={classNames(
            "w-full lg:h-[23rem] md:h-44 lg:rounded-md object-cover"
          )}
          placeholder="blur"
        />
      </div>
    </section>
  );
}

interface ImgProps {
  src: StaticImageData;
  sizing?: "tall" | "long" | "big";
}

function Img({ src, sizing }: ImgProps) {
  const tall = "lg:h-[23rem] md:h-44 lg:row-span-2";
  const long = "lg:h-44 lg:col-span-2";
  const big = "lg:h-[23rem] md:h-44 lg:row-span-2 lg:col-span-2";
  const regular = "md:h-44";

  const sizingMap = {
    tall: tall,
    long: long,
    big: big,
  };

  return (
    <Image
      alt=""
      src={src}
      className={classNames(
        "w-full lg:rounded-md object-cover",
        sizing ? sizingMap[sizing] : regular
      )}
      placeholder="blur"
    />
  );
}
