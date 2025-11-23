import React, { useState } from "react";
import PhoneNumberInput from "./Phone";
import Button from "./Button";
import FancyCheckbox from "./checkbox";
import Modal from "./Modal";
import { isValidPhoneNumber } from "react-phone-number-input";

const Plant = () => {
  const [someState, setSomeState] = useState(false);
  const [phone, setPhone] = useState("");
  const [modalCheck, setmodalCheck] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [checkError, setcheckError] = useState("");
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
  const validateCheck = () => {
    if (!someState) {
      setcheckError("error checked");
      return false;
    }
    return true;
  };
  const clickModal = () => {
    // console.log(validateName(), validatePhone());

    if (validatePhone() && validateCheck()) {
      setOpen(true);
      setError("");
      setcheckError("");
    }
    console.log("Yuborildi:", phone);
  };
  return (
    <div className="container-base relative top-60 mb-60 lg:mb-40">
      <h1 className="xl:text-5xl text-32  text-center sm:text-left font-bold font-space-grotesk text-secondary lg:mt-0">
        Проведем экскурсию по заводу
      </h1>
      <h4 className="font-space-grotesk  text-center sm:text-left font-normal lg:text-2xl text-gray-soft my-4">
        а так же ответим на все вопросы которые могли <br /> у вас возникнуть
      </h4>
      <div className="buttons ml-1 flex flex-col mx-auto md:flex-row gap-4 my-4 lg::ml-0">
        <div className="phone">
          <PhoneNumberInput
            className="h-52 lg:w-270 rounded-10"
            value={phone}
            onChange={setPhone} // 🔥 SHART!
            error={error}
            setError={setError}
          />
          {error && <span className="text-red-500 text-xs -mt-3">{error}</span>}
        </div>
        <Button
          onClick={clickModal}
          className="bg-orange h-52 rounded-10 text-white px-4 font-bold"
        >
          Записаться на экскурсию
        </Button>
      </div>
      <div className="checked ml-1 ">
        <label className="inline-flex items-center gap-3 cursor-pointer">
          <FancyCheckbox
            checked={someState}
            onChange={(v) => setSomeState(v)}
          />
          <span className="inline-block text-sm text-black font-arial">
            Даю согласие на обработку своих персональных данных
          </span>
        </label>
        {checkError && (
          <span className="text-red-500 text-xs block">{checkError}</span>
        )}
      </div>
      <img
        className="absolute right-28 -top-56 lg:-top-12 w-8/12 lg:w-1/3 object-contain"
        src="https://static.tildacdn.com/tild6430-6233-4662-a133-383530376361/Layer_1_5.png"
        alt="images"
      />
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

export default Plant;
