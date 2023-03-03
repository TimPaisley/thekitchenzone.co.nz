import Image, { StaticImageData } from "next/image";
import bKitchen1 from "../public/images/b-kitchen1.jpg";
import bKitchen3 from "../public/images/b-kitchen3.jpg";
import bKitchen6 from "../public/images/b-kitchen6.jpg";
import bLaundry1 from "../public/images/b-laundry1.jpg";
import bVanity1 from "../public/images/b-vanity1.jpg";
import lKitchen1 from "../public/images/l-kitchen1.jpg";
import lKitchen2 from "../public/images/l-kitchen2.jpg";
import lKitchen4 from "../public/images/l-kitchen4.jpg";
import pKitchen2 from "../public/images/p-kitchen2.jpg";
import pKitchen3 from "../public/images/p-kitchen3.jpg";
import uKitchen1 from "../public/images/u-kitchen1.jpg";
import uKitchen2 from "../public/images/u-kitchen2.jpg";
import uKitchen3 from "../public/images/u-kitchen3.jpg";
import uKitchen4 from "../public/images/u-kitchen4.jpg";
import uKitchen5 from "../public/images/u-kitchen5.jpg";
import uVanity1 from "../public/images/u-vanity1.jpg";
import classNames from "classnames";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-5xl m-auto">
      <p className="font-bold text-red-500 text-center">Gallery</p>
      <h1 className="text-3xl mt-0 my-8 font-semibold text-center">
        See for yourself
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={bKitchen1} sizing="big" />
        <Img src={bKitchen3} sizing="tall" />
        <Img src={bKitchen6} />
        <Img src={bLaundry1} />
        <Img src={bVanity1} sizing="tall" />
        <Img src={lKitchen1} />
        <Img src={lKitchen2} />
        <Img src={lKitchen4} />
        <Img src={uKitchen1} sizing="big" />
        <Img src={pKitchen2} />
        <Img src={pKitchen3} />
        <Img src={uKitchen2} />
        <Img src={uKitchen3} />
        <Img src={uKitchen4} />
        <Img src={uKitchen5} />
        <Img src={uVanity1} />
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
