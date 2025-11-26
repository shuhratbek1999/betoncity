import { useState } from "react";
import HeroBgImg from "../assets/images/hero-main.webp";
import PhoneNumberInput from "../components/Phone";
import Button from "../components/Button";
import FancyCheckbox from "../components/checkbox";
import Modal from "../components/Modal";
import { isValidPhoneNumber } from "react-phone-number-input";
export default function Hero() {
  const [modalCheck, setmodalCheck] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [checkError, setcheckError] = useState("");
  const [someState, setSomeState] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tanlangan raqam:", phone);
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
    }
    console.log("Yuborildi:", phone);
  };
  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col justify-start items-center overflow-hidden">
      <div className="images relative top-0 w-full h-[calc(100vh-64px)] z-10">
        <img
          className="absolute top-[10%] h-full -translate-x-1/2 w-[250%] max-w-none object-contain pointer-events-none md:bottom-auto md:top-0 md:left-0 md:translate-x-0 md:w-full md:h-full md:object-cover"
          src={HeroBgImg}
          alt=""
        />
        <div className="absolute md:hidden top-0 left-0 z-10 w-full h-2/3 bg-linear-to-b from-[#fcfcfd] to-transparent pointer-events-none"></div>
        <div className="z-30 absolute bottom-[18%] md:bottom-[10%] xl:bottom-[12%] left-[45%]">
          <div className="relative max-sm:w-85 max-sm:h-85 sm:w-135 sm:h-135 md:-bottom-8/12 max-md:-bottom-5/12 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 rounded-full z-0"></div>
            <div className="absolute cursor-pointer w-12 h-12 md:w-85 md:h-85 rounded-full z-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-100/20 rounded-full"></div>
              <a href="#calculator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#f6ae3f"
                  className="size-6 md:size-10 animate-bounce-y opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </a>
            </div>
            <svg
              viewBox="0 0 200 200"
              className="absolute w-full h-full animate-rotate-circle z-20"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -73, 0 a 73,73 0 1,1 146,0 a 73,73 0 1,1 -146,0"
                />
              </defs>

              <text fill="white" fontSize="16" letterSpacing="2.5">
                <textPath
                  href="#circlePath"
                  className="text-white text-xl font-roman capitalize p-1"
                >
                  Рассчитать стоимость Рассчитать стоимость Рассчитать стоимость
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="container-base absolute top-0 z-20 mt-3 md:mt-10 xl:mt-[15%] 2xl:mt-[10%]">
        <h1 className="text-secondary leading-8 sm:leading-14 lg:leading-16 w-full lg:w-754 text-32 sm:text-4xl md:text-5xl lg:text-58px font-arial font-bold text-center md:text-left">
          ПРОИЗВОДСТВО <br />{" "}
          <span className="text-nowrap inline-block">И ДОСТАВКА БЕТОНА</span>{" "}
          <br />
          <span className="font-normal">в Москве и МО</span>
        </h1>
        <div className="font-normal text-center sm:text-left text-18 lg:text-2xl mt-2 md:my-4">
          Напрямую с завода
          <strong className="ml-1">
            от 2 200 р/м3 по{" "}
            <a href="#" className="underline">
              ГОСТу.
            </a>{" "}
          </strong>
        </div>
        <div className="form">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-2 my-2">
            <div className="phone">
              <PhoneNumberInput
                className="h-76 lg:w-270 rounded-10"
                value={phone}
                onChange={setPhone} // 🔥 SHART!
                error={error}
                setError={setError}
              />
              {error && (
                <span className="text-red-500 text-xs -mt-5">{error}</span>
              )}
            </div>
            <Button
              onClick={clickModal}
              className="lg:w-270 h-76 bg-primary px-3.5 rounded-10 text-white text-base font-bold text-nowrap"
            >
              Получить расчет стоимости
            </Button>
          </div>
          <div className="checkbox flex flex-col gap-2 justify-center">
            <label className="inline-flex items-center gap-3 cursor-pointer">
              <FancyCheckbox
                checked={someState}
                onChange={(v) => setSomeState(v)}
              />
              <span className="inline-block text-sm font-space-grotesk text-secondary">
                Даю согласие на обработку своих персональных данных
              </span>
            </label>
            {checkError && (
              <span className="text-red-500 text-xs -mt-3">{checkError}</span>
            )}
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
}
