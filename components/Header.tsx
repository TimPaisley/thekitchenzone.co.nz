import Moon from "./icons/Moon";
import Star from "./icons/Star";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <Star />
      <div className="flex space-x-16 font-semibold">
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <Moon />
    </header>
  );
}
