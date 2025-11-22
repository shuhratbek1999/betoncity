import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import PhoneNumberInput from "./Phone";
import FancyCheckbox from "./checkbox";

const CalculationBiton = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [someState, setSomeState] = useState(false);
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
  return (
    <div
      className="flex justify-center h-435 items-center my-20"
      style={{
        backgroundImage:
          "url(https://static.tildacdn.com/tild6634-6261-4633-b962-663939663533/Frame_2445_1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-base flex flex-col items-center">
        <h1 className="text-32 lg:text-5xl font-bold text-white text-center">
          Рассчитать стоимость бетона
        </h1>
        <h4 className="font-normal text-center sm:text-left leading-6 text-white text-2xl my-4">
          Наш менеджер рассчитает стоимость вашего заказа в течении 10 минут
        </h4>
        <Button
          onClick={() => setOpen(true)}
          className="text-[#383838] font-bold font-space-grotesk rounded-10 bg-white"
        >
          Получить расчет стоимости
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

export default CalculationBiton;
