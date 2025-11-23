import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import PhoneNumberInput from "../components/Phone";
import FancyCheckbox from "../components/checkbox";
import { isValidPhoneNumber } from "react-phone-number-input";
const Prices = () => {
  const services = [
      { id: 1, name: "На гравийном щебне" },
      { id: 2, name: "На гранитном щебне" },
      { id: 3, name: "Растворы" },
      { id: 4, name: "Тощий бетон" },
      { id: 5, name: "Пескобетон" },
      { id: 6, name: "Керамзитобетон" },
      { id: 7, name: "Цементно-песчанная смесь" },
    ],
    pricesList = [
      {
        id: 1,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 2,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 3,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 4,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 5,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 6,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 7,
        name: "M100 B7.5",
        price: 3200,
        services_id: 1,
      },
      {
        id: 8,
        name: "М100 B7.5",
        price: 4150,
        services_id: 2,
      },
      {
        id: 9,
        name: "M150 B10/12.5",
        price: 4300,
        services_id: 2,
      },
      {
        id: 10,
        name: "M200 B15",
        price: 4450,
        services_id: 2,
      },
      {
        id: 11,
        name: "M250 B20",
        price: 4600,
        services_id: 2,
      },
      {
        id: 12,
        name: "M300 B22.5",
        price: 4800,
        services_id: 2,
      },
      {
        id: 13,
        name: "М350 B25",
        price: 4950,
        services_id: 2,
      },
      {
        id: 14,
        name: "М400 B30",
        price: 5300,
        services_id: 2,
      },
      {
        id: 15,
        name: "М450 B35",
        price: 5600,
        services_id: 2,
      },
      {
        id: 16,
        name: "M550 B40",
        price: 5900,
        services_id: 2,
      },
      {
        id: 17,
        name: "M600 B45",
        price: 6450,
        services_id: 2,
      },
      {
        id: 18,
        name: "М100",
        price: 2700,
        services_id: 3,
      },
      {
        id: 19,
        name: "М150",
        price: 2850,
        services_id: 3,
      },
      {
        id: 20,
        name: "М200",
        price: 3050,
        services_id: 3,
      },
      {
        id: 21,
        name: "М250",
        price: 3600,
        services_id: 3,
      },
      {
        id: 22,
        name: "М300",
        price: 3600,
        services_id: 3,
      },
      {
        id: 23,
        name: "Цементное молоко",
        price: 5500,
        services_id: 4,
      },
      {
        id: 24,
        name: "М100 B7.5",
        price: 3500,
        services_id: 4,
      },
      {
        id: 25,
        name: "M150 B10/12.5",
        price: 3800,
        services_id: 4,
      },
      {
        id: 26,
        name: "M200 B15",
        price: 3950,
        services_id: 4,
      },
      {
        id: 27,
        name: "M250 B20",
        price: 4150,
        services_id: 4,
      },
      {
        id: 28,
        name: "M300 B22.5",
        price: 4250,
        services_id: 4,
      },
      {
        id: 29,
        name: "М100",
        price: 2800,
        services_id: 5,
      },
      {
        id: 30,
        name: "М150",
        price: 2850,
        services_id: 5,
      },
      {
        id: 31,
        name: "М200",
        price: 3150,
        services_id: 5,
      },
      {
        id: 32,
        name: "М250",
        price: 3450,
        services_id: 5,
      },
      {
        id: 33,
        name: "М300",
        price: 3750,
        services_id: 5,
      },
      {
        id: 34,
        name: "М100 B7.5 D1600",
        price: 3700,
        services_id: 6,
      },
      {
        id: 35,
        name: "М150 B12.5 D1600",
        price: 3900,
        services_id: 6,
      },
      {
        id: 36,
        name: "М200 B15 D1600",
        price: 4100,
        services_id: 6,
      },
      {
        id: 37,
        name: "М250 B20 D1600",
        price: 4300,
        services_id: 6,
      },
      {
        id: 38,
        name: "М100",
        price: 2200,
        services_id: 7,
      },
      {
        id: 39,
        name: "М150",
        price: 2300,
        services_id: 7,
      },
      {
        id: 40,
        name: "М200",
        price: 2400,
        services_id: 7,
      },
      {
        id: 41,
        name: "М250",
        price: 2550,
        services_id: 7,
      },
      {
        id: 42,
        name: "М300",
        price: 2750,
        services_id: 7,
      },
    ];
  const [prices, setServices] = useState([]);
  const [servicesId, setService] = useState(1);
  const [someState, setSomeState] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [textes, setText] = useState("Заказать бетон на гравийном щебне");
  const getTextBtn = (key) => {
    switch (key) {
      case 1:
        setText("Заказать бетон на гравийном щебне");
        break;
      case 2:
        setText("Заказать бетон на гранитном щебне");
        break;
      case 3:
        setText("Заказать строительный раствор");
        break;
      case 4:
        setText("Заказать тощий бетон");
        break;
      case 5:
        setText("Заказать керамзитобетон");
        break;
      default:
        setText("Заказать цементно-песчаную смесь");
        break;
    }
  };
  const clickServices = (id) => {
    setServices(pricesList.filter((item) => item.services_id == id));
    setService(id);
    getTextBtn(id);
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
  const handleChange = (val) => {
    setPhone(val);
    validatePhone(val);
  };
  const clickModal = () => {
    if (!validatePhone()) return;
    console.log("Yuborildi:", phone);
  };
  useEffect(() => {
    setServices(pricesList.filter((item) => item.services_id === 1));
    getTextBtn(1);
  }, []);
  return (
    <div className="container-base mt-10" id="Цены">
      <h1 className="lg:text-5xl font-bold font-space-grotesk text-center">
        Цены на бетон в Москве и МО
      </h1>
      <div className="buttons flex items-center gap-4 my-6 max-xl:overflow-x-scroll no-scrollbar">
        {services.map((s) => (
          <Button
            key={s.id}
            onClick={() => clickServices(s.id)}
            className={`${
              servicesId == s.id
                ? "bg-orange text-white"
                : "bg-white text-black"
            } rounded-xl whitespace-nowrap transition-all delay-200 ease-in-out text-base font-space-grotesk font-normal border border-price-btn hover:bg-orange hover:text-white hover:border-orange`}
          >
            {s.name}
          </Button>
        ))}
      </div>
      <div className="prices_list flex flex-wrap justify-between items-start my-10">
        {prices.map((p) => (
          <div
            key={p.id}
            className="w-full md:w-[48%] flex justify-between border-b pb-2.5 border-gray-300 mt-7"
          >
            <h4 className="font-space-grotesk font-semibold uppercase lg:text-[18px] text-secondary">
              {p.name}
            </h4>
            <span className="font-space-grotesk font-semibold uppercase lg:text-[18px] text-secondary">
              {p.price}₽
            </span>
          </div>
        ))}
      </div>
      <div className="footer-btn flex justify-center items-center">
        <Button
          onClick={() => setOpen(true)}
          className="bg-orange text-white rounded-10 shadow-[0px_0px_10px_#0000001a] text-sm font-space-grotesk"
        >
          {textes}
        </Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="container flex flex-col gap-4">
          <h1 className="lg:text-4xl text-secondary font-semibold mb-2.5 font-space-grotesk">
            Оставить заявку
          </h1>
          <PhoneNumberInput
            value={phone}
            onChange={setPhone}
            setError={setError}
            className="h-[60px] rounded-sm"
          />
          {error && <span className="text-red-500 text-xs -mt-3">{error}</span>}
          <label className="inline-flex items-center gap-3 cursor-pointer">
            <FancyCheckbox
              checked={someState}
              onChange={(v) => setSomeState(v)}
            />
            <span className="inline-block text-sm font-space-grotesk text-check leading-3.5">
              Даю согласие на обработку своих персональных данных
            </span>
          </label>
          <Button
            onClick={clickModal}
            className="bg-[#ff5e00] rounded-sm text-white text-base px-14 w-full"
          >
            Заказать
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Prices;
