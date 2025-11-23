import { useEffect, useState } from "react";
import Button from "./Button";
import PhoneNumberInput from "./Phone";
import FancyCheckbox from "./checkbox";
import { isValidPhoneNumber } from "react-phone-number-input";
import Modal from "./Modal";
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
  const [someState, setSomeState] = useState(false);
  const [modalCheck, setmodalCheck] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [errname, setNameError] = useState("");
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
  const validatePhone = () => {
    if (!phone) {
      setError("Введите номер телефона");
      return false;
    }

    if (!isValidPhoneNumber(phone)) {
      setError("Неверный номер телефона");
      return false;
    }

    setError("");
    return true;
  };
  const validateName = () => {
    if (firstName.length == 0) {
      setNameError("Введите наме");
      return false;
    }
    return true;
  };
  const clickModal = () => {
    // console.log(validateName(), validatePhone());

    if (validatePhone() && validateName()) {
      setOpen(true);
    }
    console.log("Yuborildi:", phone);
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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smartcaptcha.yandexcloud.net/captcha.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);
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
            className="object-contain"
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
              onChange={(e) => setfirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="Ваше имя"
              className="h-52 bg-phone border-none focus:outline-none indent-3 text-black font-normal text-base rounded-10 lg:w-full"
            />
            {errname && (
              <span className="text-red-500 text-xs -mt-3">{errname}</span>
            )}
            <PhoneNumberInput
              className="h-52 lg:w-630 rounded-10"
              value={phone}
              onChange={setPhone}
              setError={setError}
            />
            {error && (
              <span className="text-red-500 text-xs -mt-3">{error}</span>
            )}
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
            <button
              onClick={(e) => {
                e.preventDefault();
                clickModal();
              }}
              className="w-full h-52 lg:text-base hover:bg-white hover:text-orange rounded-10 bg-orange text-white font-semibold border border-orange border-solid"
            >
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="content">
          <h1 className="text-center font-arial text-xl text-[#222222] font-light pb-5">
            Поставьте галочку, кликнув на квадратик, чтобы мы знали, что вы не
            робот
          </h1>
          <div className="robot border-t border-b border-gray-200 py-4">
            <label className="inline-flex items-center gap-x-3 cursor-pointer">
              <FancyCheckbox
                checked={modalCheck}
                onChange={(v) => setmodalCheck(v)}
              />
              <span className="inline-block text-sm font-space-grotesk">
                <span className="text-base font-bold">Я не робот</span> <br />
                <span>Нажмите, чтобы продолжить</span>
              </span>
            </label>
            <div className="flex justify-between items-center">
              <a href="#" className="text-sm">
                SmartCaptcha by Yandex Cloud
              </a>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z"
                    fill="#080341"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="smart-captcha"
          data-sitekey="YOUR_SITE_KEY"
          data-callback="onVerify"
        />
      </Modal>
    </div>
  );
};

export default Calculator;
