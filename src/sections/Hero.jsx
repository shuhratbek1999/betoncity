import { useState } from "react";
import HeroBgImg from "../assets/images/hero-main.webp";
import PhoneNumberInput from "../components/Phone";
import Button from "../components/Button";
import FancyCheckbox from "../components/checkbox";
export default function Hero() {
  const [phone, setPhone] = useState("");
  const [someState, setSomeState] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tanlangan raqam:", phone);
  };
  return (
    <div
      className="relative overflow-hidden h-[calc(100vh-64px)] flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBgImg})` }}
    >
      <div className="container-base">
        <h1 className="text-secondary w-full lg:w-754 text-3xl sm:text-4xl md:text-5xl lg:text-58px font-arial font-bold my-4 text-center lg:text-left">
          ПРОИЗВОДСТВО <br /> И ДОСТАВКА БЕТОНА <br />
          <span className="font-normal">в Москве и МО</span>
        </h1>
        <div className="font-normal lg:text-2xl">
          Напрямую с завода
          <strong className="ml-1">
            от 2 200 р/м3 по{" "}
            <a href="#" className="underline">
              ГОСТу.
            </a>{" "}
          </strong>
        </div>
        <div className="form">
          <div className="flex flex-col sm:flex-row gap-5 my-4">
            <PhoneNumberInput
              className="h-76 lg:w-270"
              value={phone}
              onChange={setPhone}
            />
            <Button
              onClick={() => alert("Secondary clicked")}
              className="lg:w-270 h-76 bg-primary px-3.5 rounded-10 text-white text-base"
            >
              Получить расчет стоимости
            </Button>
          </div>
          <div className="checkbox flex gap-2 items-center">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <FancyCheckbox
                checked={someState}
                onChange={(v) => setSomeState(v)}
              />
              <span className="inline-block text-xs font-space-grotesk text-check">
                Даю согласие на обработку своих персональных данных
              </span>
            </label>
          </div>
        </div>
        <div className="relative lg:w-135 lg:h-135 max-sm:w-85 max-sm:h-85 flex items-center justify-center left-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-black/50 rounded-full"></div>
          <div className="absolute w-12 h-12 lg:w-20 lg:h-20 rounded-full z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-100/30 rounded-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#f6ae3f"
              className="size-6 lg:size-10 animate-bounce-y opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
          <svg
            viewBox="0 0 200 200"
            className="absolute w-full h-full animate-rotate-circle"
          >
            <defs>
              <path
                id="circlePath"
                d="
      M 100, 100
      m -73, 0
      a 73,73 0 1,1 146,0
      a 73,73 0 1,1 -146,0
    "
              />
            </defs>

            <text
              fill="white"
              fontSize="16"
              fontWeight="bold"
              letterSpacing="2.5"
            >
              <textPath href="#circlePath" className="font-roman">
                Рассчитать стоимость Рассчитать стоимость Рассчитать стоимость
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
