import HeroBgImg from "../assets/images/hero-main.webp";
export default function Hero() {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-64px)]">
      <img
        src={HeroBgImg}
        className="absolute z-0 top-0 left-0 size-full object-cover"
        alt="Hero BG"
      />
    </div>
  );
}
