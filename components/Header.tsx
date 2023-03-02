import Moon from "./icons/Moon";
import Star from "./icons/Star";

export default function Header() {
  return (
    <header className="sticky w-full top-0 left-0 p-4 flex justify-between items-center z-50 bg-white">
      <Star />
      <div className="flex space-x-16 font-semibold">
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <Star />
    </header>
  );
}
