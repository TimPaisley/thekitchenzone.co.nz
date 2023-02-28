import Image from "next/image";
import img from "../public/images/parker3.jpg";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-5xl m-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Img />
        <Img />
        <Img />
        <Img />
        <Img />
        <Img />
      </div>
    </section>
  );
}

function Img() {
  return <Image alt="" src={img} className="w-full rounded-md" />;
}
