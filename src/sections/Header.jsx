import { useState } from "react";
import LogoImg from "../assets/icons/logo.png";
import YandexReviews from "../assets/images/yandex-reviews.png";

const navItems = [
  {
    label: "Продукция",
    children: [
      {
        label: "На гравии",
        children: [
          "М100 (B7.5)",
          "М150 (B10/12.5)",
          "М200 (B15)",
          "М250 (B20)",
          "М300 (B22.5)",
          "М350 (B25)",
          "М400 (B30)",
        ],
      },
      {
        label: "На граните",
        children: [
          "М100 (B7.5)",
          "М150 (B10/12.5)",
          "М200 (B15)",
          "М250 (B20)",
          "М300 (B22.5)",
          "М350 (B25)",
          "М400 (B30)",
          "М450 (B35)",
          "М500 (B40)",
          "М550 (B45)",
        ],
      },
      {
        label: "Растворы",
        children: ["М100", "М150", "М200", "М250", "М300"],
      },
      {
        label: "Тощий бетон",
        children: [
          "М100 (B7.5)",
          "М150 (B10/12.5)",
          "М200 (B15)",
          "М250 (B20)",
          "М300 (B22.5)",
          "М350 (B25)",
          "М400 (B30)",
        ],
      },
      {
        label: "Пескобетон",
        children: ["М100", "М150", "М200", "М250", "М300"],
      },
      {
        label: "Керамзитобетон",
        children: [
          "М100 (B7.5)",
          "М150 (B10/12.5)",
          "М200 (B15)",
          "М250 (B20)",
        ],
      },
      {
        label: "Цементно-песчаная смесь",
        children: ["М100", "М150", "М200", "М250", "М300"],
      },
    ],
  },
  { label: "Цены" },
  { label: "О нас" },
  { label: "Проекты" },
  { label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white sticky top-0 left-0 z-50 w-full py-2 shadow-sm">
      <div className="relative">
        {/* Mobile Menu BTN */}
        <button
          onClick={() => setOpen(true)}
          className={`absolute xl:hidden top-1/2 -translate-y-1/2 z-10 ${
            open ? "hidden" : "flex"
          }`}
        >
          <img
            className="size-15"
            src="https://optim.tildacdn.com/tild3937-3138-4330-b432-366437346534/-/resize/72x/-/format/webp/menu.png.webp"
            alt="img"
          />
        </button>

        <div
          className={`container-base flex items-center justify-between ${
            open ? "hidden" : "flex"
          }`}
        >
          {/* Logo */}
          <a href="#" className="hidden md:flex">
            <img className="h-10" src={LogoImg} alt="Logo" />
          </a>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-8 font-medium">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {/* Main link */}
                <a
                  href={`#${i !== 0 ? item.label : ""}`}
                  className={`flex text-sm items-center gap-1.5 ${
                    item.children
                      ? "after:content-[''] after:border-4 after:border-transparent after:border-t-current after:mt-0.75 after:transition-transform after:duration-300 group-hover:after:rotate-180 group-hover:after:mt-0"
                      : ""
                  } transition hover:text-secondary/75`}
                >
                  {item.label}
                </a>

                {/* Level 1 dropdown */}
                {item.children && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <ul className="py-2">
                      {item.children.map((sub, j) => (
                        <li
                          key={j}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer group/sub flex justify-between"
                        >
                          {sub.label}
                          {sub.children && (
                            <ul className="absolute top-0 left-full w-48 bg-white rounded-md shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              {sub.children.map((opt, k) => (
                                <li
                                  key={k}
                                  className="px-4 text-sm py-2 hover:bg-gray-50 cursor-pointer"
                                >
                                  {opt}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center max-sm:w-full justify-between max-sm:ml-12 lg:gap-4">
            <div className="flex flex-col gap-x-3">
              <a
                href="tel:+74952666924"
                className="hover:text-secondary/75 underline text-base"
              >
                +7 (495) 266 69-24
              </a>

              <a
                href="#"
                className="hover:text-secondary/75 underline text-[11px] lg:text-sm"
              >
                zakaz@betoncitystroy.ru
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="shrink-0">
                <img
                  className="size-10"
                  src="https://optim.tildacdn.com/tild3965-3131-4139-b564-396666663032/-/cover/48x48/center/center/-/format/webp/logos_whatsapp-icon.png.webp"
                  alt=""
                />
              </a>

              <a href="#" className="shrink-0">
                <img
                  className="size-10"
                  src="https://optim.tildacdn.com/tild3139-3161-4264-b338-346265613135/-/cover/48x48/center/center/-/format/webp/logos_telegram.png.webp"
                  alt=""
                />
              </a>
            </div>
            <a href="#" className="shrink-0 sm:flex hidden">
              <img className="h-12.5" src={YandexReviews} alt="img" />
            </a>
          </div>
        </div>
        <div
          className={`
    mobile_modal fixed top-0 right-0 w-full bg-gray-50 h-screen z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
        >
          <div className="modal-top flex items-center h-16 gap-2 w-full px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setOpen(false)}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            <img
              src="https://static.tildacdn.com/tild6465-3839-4534-b334-323964396565/image_10.png"
              alt="logo img"
              className="w-60 h-10"
            />
          </div>

          {/* NAV items */}
          <nav className="sm:hidden flex flex-col items-start gap-8 font-medium px-6 py-4">
            {navItems.map((item, i) => (
              <div key={i} className="relative group border-b-2 pb-4 w-full">
                <a
                  onClick={() => setOpen(false)}
                  href={`#${i != 0 ? item.label : ""}`}
                  className={`flex items-center gap-1.5 ${
                    item.children
                      ? "after:content-[''] after:border-4 after:border-transparent after:border-t-current after:transition-transform after:duration-300 group-hover:after:rotate-180"
                      : ""
                  } transition hover:text-secondary/75`}
                >
                  {item.label}
                </a>

                {item.children && (
                  <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="py-2">
                      {item.children.map((sub, j) => (
                        <li
                          key={j}
                          className={`relative group/sub px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                            sub.children
                              ? "flex items-center justify-between"
                              : ""
                          }`}
                        >
                          {sub.label}
                          {sub.children && (
                            <ul className="absolute left-full top-0 ml-2 w-48 bg-white rounded-md shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              {sub.children.map((opt, k) => (
                                <li
                                  key={k}
                                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                >
                                  {opt}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center max-sm:w-10/12 justify-between lg:gap-4">
              <div className="flex flex-col gap-x-3">
                <a
                  href="tel:+74952666924"
                  className="hover:text-secondary/75 underline text-base"
                >
                  +7 (495) 266 69-24
                </a>
              </div>
              <div className="flex items-center gap-1">
                <a href="#" className="shrink-0">
                  <img
                    className="size-10"
                    src="https://optim.tildacdn.com/tild3965-3131-4139-b564-396666663032/-/cover/48x48/center/center/-/format/webp/logos_whatsapp-icon.png.webp"
                    alt=""
                  />
                </a>

                <a href="#" className="shrink-0">
                  <img
                    className="size-10"
                    src="https://optim.tildacdn.com/tild3139-3161-4264-b338-346265613135/-/cover/48x48/center/center/-/format/webp/logos_telegram.png.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <a href="#" className="shrink-0 sm:hidden flex w-10/12">
              <img className="h-12.5" src={YandexReviews} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
