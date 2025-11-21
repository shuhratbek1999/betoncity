import { useState } from "react";
import Button from "./Button";
import PhoneNumberInput from "./Phone";
import FancyCheckbox from "./checkbox";
const Calculator = () => {
  let products = [
      {
        id: 1,
        name: "Товарный бетон",
      },
      {
        id: 2,
        name: "Тощий(дорожный) бетон",
      },
      {
        id: 3,
        name: "Керамзитобетон",
      },
      {
        id: 4,
        name: "Бетонный раствор",
      },
      {
        id: 5,
        name: "Цементный раствор(ЦПР)",
      },
    ],
    productItems = [
      {
        id: 1,
        values: "6-50 м3",
      },
      {
        id: 2,
        values: "50-200 м3",
      },
      {
        id: 3,
        values: "200-500 м3",
      },
      {
        id: 4,
        values: "500-3000 м3",
      },
      {
        id: 5,
        values: "Свыше 3000 м3",
      },
    ],
    deadlines = [
      { id: 1, name: "Сегодня" },
      { id: 2, name: "Завтра" },
      { id: 3, name: "На этой неделе" },
      { id: 4, name: "На следующей неделе" },
      { id: 5, name: "В следующем месяце" },
    ],
    services = [
      { id: 1, name: "Доставка" },
      { id: 2, name: "Самовывоз" },
    ],
    payments = [
      { id: 1, name: "Безналичный (Без НДС)" },
      { id: 2, name: "Безналичный (С НДС)" },
      { id: 3, name: "Наличными" },
    ];
  const [percent, setPercent] = useState(0);
  const [btn, setBtn] = useState(1);
  const [someState, setSomeState] = useState(1);
  const [text, setText] = useState("Выберете вид продукции");
  const increase = (btn) => {
    setPercent((prev) => {
      const next = prev + 20;
      return next <= 100 ? next : 100;
    });
    setBtn("2");
    getText("1");
    console.log(btn);
  };
  const clickProductItem = () => {
    setPercent((prev) => {
      const next = prev + 20;
      return next <= 100 ? next : 100;
    });
    setBtn("3");
    getText("2");
  };
  const clickDedline = () => {
    setPercent((prev) => {
      const next = prev + 20;
      return next <= 100 ? next : 100;
    });
    setBtn("4");
    getText("3");
  };
  const clickServices = () => {
    setPercent((prev) => {
      const next = prev + 20;
      return next <= 100 ? next : 100;
    });
    setBtn("5");
    getText("4");
  };
  const clickPayments = () => {
    setPercent((prev) => {
      const next = prev + 20;
      return next <= 100 ? next : 100;
    });
    setBtn("6");
  };
  const getText = (key) => {
    switch (key) {
      case "1":
        setText("Предполагаемый объём");
        break;
      case "2":
        setText("Когда вам нужен бетон?");
        break;
      case "3":
        setText("Варианты получения");
        break;
      case "4":
        setText("Вариант оплаты");
        break;
      default:
        break;
    }
  };
  return (
    <div className="container-base p-4">
      <h1 className="text-secondary font-bold font-space-grotesk my-8 lg:text-5xl text-center">
        Узнайте точную стоимость онлайн
      </h1>
      <div className="calculator_section relative w-full min-h-298 rounded-xl bg-white border-transparent shadow-[14px_12px_17px_12px_#004c981a] p-4">
        <div
          className={`${
            btn == "6" ? "hidden" : "flex"
          } section_top justify-between items-center`}
        >
          <h2 className="text-2xl font-bold font-space-grotesk text-secondary">
            {text}
          </h2>
          <img
            src="https://static.tildacdn.com/tild3736-3636-4338-b630-616138376662/solar_stars-line-duo.svg"
            alt="section img"
          />
        </div>
        <div className={`${btn == "6" ? "hidden" : "flex"} flex-col gap-2`}>
          <h4>Готово: {percent}%</h4>
          <div className="relative w-full h-[7px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-primary"
              style={{ width: "60px" }}
            />
            <div
              className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
              style={{ width: `${percent}%`, marginLeft: "15px" }}
            />
          </div>
        </div>
        <div
          className={`buttons flex flex-col sm:flex-row flex-wrap items-center gap-4 my-5 ${
            btn == "1" ? "flex" : "hidden"
          }`}
        >
          {products.map((btn) => (
            <Button
              key={btn.id}
              className="bg-white border max-sm:w-full border-check py-4 font-space-grotesk text-base font-normal flex gap-2 items-center rounded-xl"
              onClick={() => increase(btn.id)}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-check inline-block"></span>
              {btn.name}
            </Button>
          ))}
        </div>
        <div
          className={`buttons flex-col sm:flex-row items-center gap-4 my-5 ${
            btn == "2" ? "flex" : "hidden"
          }`}
        >
          {productItems.map((btn) => (
            <Button
              key={btn.id}
              className="bg-white max-sm:w-full border border-check py-4 font-space-grotesk text-base font-normal flex gap-2 items-center rounded-xl"
              onClick={() => clickProductItem(btn.id)}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-check inline-block"></span>
              {btn.values}
            </Button>
          ))}
        </div>
        <div
          className={`buttons flex-col sm:flex-row items-center gap-4 my-5 ${
            btn == "3" ? "flex" : "hidden"
          }`}
        >
          {deadlines.map((btn) => (
            <Button
              key={`product-${btn.id}`}
              className="bg-white max-sm:w-full border border-check py-4 font-space-grotesk text-base font-normal flex gap-2 items-center rounded-xl"
              onClick={() => clickDedline(btn.id)}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-check inline-block"></span>
              {btn.name}
            </Button>
          ))}
        </div>
        <div
          className={`buttons flex-col sm:flex-row items-center gap-4 my-5 ${
            btn == "4" ? "flex" : "hidden"
          }`}
        >
          {services.map((btn) => (
            <Button
              key={`product-${btn.id}`}
              className="bg-white max-sm:w-full border border-check py-4 font-space-grotesk text-base font-normal flex gap-2 items-center rounded-xl"
              onClick={() => clickServices(btn.id)}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-check inline-block"></span>
              {btn.name}
            </Button>
          ))}
        </div>
        <div
          className={`buttons flex-col sm:flex-row items-center gap-4 my-5 ${
            btn == "5" ? "flex" : "hidden"
          }`}
        >
          {payments.map((btn) => (
            <Button
              key={`product-${btn.id}`}
              className="bg-white max-sm:w-full border border-check py-4 font-space-grotesk text-base font-normal flex gap-2 items-center rounded-xl"
              onClick={() => clickPayments(btn.id)}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-check inline-block"></span>
              {btn.name}
            </Button>
          ))}
        </div>
        <div
          className={`finish ${
            btn == "6" ? "flex" : "hidden"
          } gap-10 my-10 flex-col sm:flex-col md:flex-row lg:flex-row`}
        >
          <div className="info lg:w-1/2">
            <h1 className="lg:text-2xl font-bold text-secondary font-space-grotesk leading-5">
              Спасибо, мы поняли, какая марка,
              <br /> наполнитель и объем вас интересует
            </h1>
            <p className="my-4 font-normal lg:text-base text-black font-space-grotesk leading-5">
              Оставьте свои данные, наш специалист свяжется с вами, рассчитает
              стоимость с учетом доставки
            </p>
            <a
              href="#"
              className="block font-montserrat text-orange lg:text-lg leading-4 font-bold mb-2"
            >
              Зафиксируем цены со скидкой с 21.11.2025 до 28.11.2025
            </a>
            <img
              src="https://static.tildacdn.com/tild3736-3636-4338-b630-616138376662/solar_stars-line-duo.svg"
              alt="section img"
            />
          </div>
          <form action="" className="flex flex-col gap-4 lg:w-1/2">
            <input
              type="text"
              placeholder="Ваше имя"
              className="h-12 bg-phone border-none focus:outline-none indent-3 text-black font-normal text-base rounded-10 lg:w-full"
            />
            <PhoneNumberInput className="lg:w-630" />
            <div className="checkbox flex items-center gap-4">
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
            <button className="w-full h-52 lg:text-base hover:bg-white hover:text-orange rounded-10 bg-orange text-white font-semibold border border-orange border-solid">
              РАССЧИТАТЬ СТОИМОСТЬ
            </button>
          </form>
        </div>
        <div
          className={`footer w-full flex flex-col sm:flex-row justify-between pr-8 gap-4 mt-6 sm:mt-12 ${
            btn == "6" ? "hidden" : "flex"
          }`}
        >
          <div className="footer-text w-full sm:w-6/12 text-orange font-bold text-[18px] font-montserrat leading-5">
            Укажите необходимую марку и объем - получите <br /> лучшее
            предложение на рынке!
          </div>
          <div
            className={`${
              btn == "1" ? "justify-end" : "justify-between"
            } buttons w-full sm:w-6/12 flex gap-4`}
          >
            <Button
              className={`${
                btn == "1" ? "hidden" : "inline-block"
              } h-52 w-1/2 capitalize hover:bg-orange hover:text-white bg-white border border-orange rounded-10`}
            >
              назад
            </Button>
            <Button className="h-52 w-1/2 capitalize hover:bg-white hover:text-orange border border-orange rounded-10 bg-orange text-white">
              далее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
