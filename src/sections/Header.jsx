import LogoImg from "../assets/icons/logo.png";
import YandexReviews from "../assets/images/yandex-reviews.png";

const navItems = [
  {
    label: "Продукция",
    children: [
      {
        label: "Категория 1",
        children: ["Option 1", "Option 2", "Option 3"],
      },
      {
        label: "Категория 2",
      },
      {
        label: "Категория 3",
      },
    ],
  },
  { label: "Цены" },
  { label: "О нас" },
  { label: "Проекты" },
  { label: "Контакты" },
];

export default function Header() {
  return (
    <header className="bg-white sticky top-0 left-0 z-50 w-full py-2 shadow-sm">
      <div className="relative">
        {/* Mobile Menu BTN */}
        <button className="absolute xl:hidden top-1/2 -translate-y-1/2 z-10">
          <img
            className="size-15"
            src="https://optim.tildacdn.com/tild3937-3138-4330-b432-366437346534/-/resize/72x/-/format/webp/menu.png.webp"
            alt="img"
          />
        </button>

        <div className="container-base flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img className="h-10" src={LogoImg} alt="Logo" />
          </a>

          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-8 font-medium">
            {navItems.map((item, i) => (
              <div key={i} className="relative group">
                {/* Main link */}
                <a
                  href="#"
                  className={`flex items-center gap-1.5 ${
                    item.children
                      ? "after:content-[''] after:border-4 after:border-transparent after:border-t-current after:mt-0.75 after:transition-transform after:duration-300 group-hover:after:rotate-180 group-hover:after:mt-0"
                      : ""
                  } transition hover:text-secondary/75`}
                >
                  {item.label}
                </a>

                {/* Level 1 dropdown */}
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

                          {/* Level 2 dropdown */}
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

          <div className="flex items-center gap-4">
            <div className="flex xl:flex-col gap-x-3">
              <a
                href="tel:+74952666924"
                className="hover:text-secondary/75 underline"
              >
                +7 (495) 266 69-24
              </a>

              <a href="#" className="hover:text-secondary/75 underline">
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
            <a href="#" className="shrink-0">
              <img className="h-12.5" src={YandexReviews} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
