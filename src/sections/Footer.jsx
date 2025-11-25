import React from "react";

const Footer = () => {
  const links = [
    { id: 1, link: "Балашиха" },
    { id: 2, link: "Видное" },
    { id: 3, link: "Дзержинский" },
    { id: 4, link: "Дмитров" },
    { id: 5, link: "Долгопрудный" },
    { id: 6, link: "Домодедово" },
    { id: 7, link: "Жуковский" },
    { id: 8, link: "Зеленоград" },
    { id: 9, link: "Ивантеевка" },
    { id: 10, link: "Истра" },
    { id: 11, link: "Королев" },
    { id: 12, link: "Красногорск" },
    { id: 13, link: "Люберцы" },
    { id: 14, link: "Мытищи" },
    { id: 15, link: "Наро-Фоминск" },
    { id: 16, link: "Одинцово" },
    { id: 17, link: "Подольск" },
    { id: 18, link: "Раменское" },
    { id: 19, link: "Реутов" },
    { id: 20, link: "Сергиев Посад" },
    { id: 21, link: "Солнечногорск" },
    { id: 22, link: "Троицк" },
    { id: 23, link: "Фрязино" },
    { id: 24, link: "Химки" },
    { id: 25, link: "Чехов" },
    { id: 26, link: "Щелково" },
  ];
  return (
    <footer className="bg-[#272727]">
      <div className="content container-base">
        <div className="footer-top pt-28 pb-10">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-0">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href=""
                    className="text-sm font-semibold text-white font-space-grotesk"
                  >
                    {l.link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="icons flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <img
            src="https://static.tildacdn.com/tild3333-6430-4566-a236-636635313337/653b19cd-c554-46ff-9.png"
            alt="images"
            className="w-8/12 sm:w-2/12 my-2 object-contain"
          />
          <div className="contact flex items-center gap-4">
            <h1 className="text-white text-18 font-space-grotesk font-bold">
              Контакты
            </h1>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79165266199&text&type=phone_number&app_absent=0"
              className="shrink-0"
            >
              <img
                src="https://static.tildacdn.com/tild3965-3131-4139-b564-396666663032/logos_whatsapp-icon.png"
                alt="whatsapp img"
                className="w-10 h-10 object-contain"
              />
            </a>
            <a href="https://t.me/betoncitystroy_bot" className="shrink-0">
              <img
                src="https://static.tildacdn.com/tild3063-6130-4630-a138-383230643434/Link__tgsvg.svg"
                alt="telegram img"
                className="w-10 h-10 object-contain"
              />
            </a>
          </div>
        </div>
        <div className="menu flex flex-col sm:flex-row justify-between gap-6 my-4">
          <div className="menu-item flex flex-col gap-y-4">
            <div className="links flex flex-col sm:flex-row justify-between sm:items-center sm:w-60">
              <a className="text-white font-space-grotesk" href="#">
                Цены
              </a>
              <a className="text-white font-space-grotesk" href="#">
                Проекты
              </a>
            </div>
            <div className="links flex flex-col sm:flex-row justify-between sm:items-center">
              <a className="text-white font-space-grotesk" href="#">
                О нас
              </a>
              <a className="text-white font-space-grotesk" href="#">
                Контакты
              </a>
            </div>
          </div>
          <div className="menu-item flex gap-4">
            <img
              src="https://static.tildacdn.com/tild3130-3239-4962-b262-366236653935/Screenshot_20251005_.png"
              alt="qr code"
              className="w-[70px] h-[70px]"
            />
            <img
              src="https://static.tildacdn.com/tild3130-3239-4962-b262-366236653935/Screenshot_20251005_.png"
              alt="qr code"
              className="w-[70px] h-[70px]"
            />
            <span className="text-white">
              Декларации соответствия <br /> на продукцию
            </span>
          </div>
          <div className="menu-item flex flex-col">
            <h1 className="text-white font-space-grotesk font-normal">
              Круглосуточная доставка
            </h1>
            <p className="text-white font-space-grotesk font-normal">
              Прием заявок: 09:00-19:00
            </p>
            <p className="text-white text-left font-space-grotesk font-normal">
              +7 (495) 266 69-24
            </p>
          </div>
        </div>
        <h6 className="text-center text-white font-medium font-space-grotesk">
          © betoncitystroy.ru 2015-2025 <br />{" "}
          <span className="font-bold">Все права защищены</span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
