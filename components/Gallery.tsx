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
import classNames from "classnames";

export default function Gallery() {
  return (
    <section id="gallery" className="pt-24 max-w-5xl m-auto">
      <p className="font-bold text-red-700 text-center">Gallery</p>
      <h1 className="text-3xl mt-0 my-8 font-semibold text-center">
        See for yourself
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img src={nKitchen3} sizing="big" />
        <Img src={nKitchen1} sizing="tall" />
        <Img src={nKitchen4} />
        <Img src={bLaundry1} />
        <Img src={bVanity1} sizing="tall" />
        <Img src={lKitchen1} />
        <Img src={lKitchen2} />
        <Img src={nKitchen2} />
        <Img src={uKitchen1} sizing="big" />
        <Img src={pKitchen2} />
        <Img src={pKitchen3} />
        <Img src={uKitchen2} />
        <Img src={uKitchen4} />
        <Img src={uKitchen7} />
        <Img src={uKitchen6} sizing="big" />
        <Img src={uKitchen8} />
        <Img src={uVanity1} />
        <Img src={uVanity2} sizing="big" />
        <Img src={uVanity5} sizing="tall" />
        <Img src={uVanity3} />
        <Img src={uVanity4} />
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
