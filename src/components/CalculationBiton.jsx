import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import PhoneNumberInput from "./Phone";
import FancyCheckbox from "./checkbox";
import { isValidPhoneNumber } from "react-phone-number-input";

const CalculationBiton = () => {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [modalCheck, setmodalCheck] = useState(false);
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
  const closeModal = () => {
    setOpen(false);
    setOpens();
    setPhone("");
    setmodalCheck(false);
    setSomeState(false);
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
      <Modal open={open} onClose={closeModal}>
        <div
          className={`${!opens ? "flex" : "hidden"} container flex-col gap-4`}
        >
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
            onClick={() => setOpens(true)}
            className="bg-[#ff5e00] h-[60px] rounded-sm text-white text-base px-14 w-full"
          >
            Заказать
          </Button>
        </div>
        <div className={`${opens ? "block" : "hidden"}`}>
          <h1 className="text-center font-arial text-xl text-[#222222] font-light pb-5">
            Поставьте галочку, кликнув на квадратик, чтобы мы знали, что вы не
            робот
          </h1>
          <div className={`robot border-t border-b border-gray-200 py-4`}>
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
      </Modal>
    </div>
  );
};

export default CalculationBiton;
