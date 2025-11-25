import { useEffect, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Calculator from "./components/Calculator";
import Experience from "./components/experience";
import Prices from "./sections/Prices";
import Advantages from "./sections/Advantages";
import Projects from "./sections/Projects";
import LaboratoryTesting from "./sections/LaboratoryTesting";
import Plant from "./components/Plant";
import Equipment from "./components/equipment";
import Carousel from "./components/Carousel";
import Sertifikat from "./components/Sertifikat";
import Info from "./sections/Info";
import CalculationBiton from "./components/CalculationBiton";
import Accordion from "./components/Accordion";
import Footer from "./sections/Footer";
import Adress from "./sections/Adress";
import Modal from "./components/Modal";
import Button from "./components/Button";
import PhoneNumberInput from "./components/Phone";
import FancyCheckbox from "./components/checkbox";
function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [cookie, setCookie] = useState(true);
  const [someState, setSomeState] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const faqData = [
    {
      id: 1,
      title: "Поставляете ли вы бетон крупным строительным организациям?",
      text: "Да, конечно. У нас своё производство бетона, поэтому мы сможем сотрудничать по любым объемам. Производительность с 7 заводов свыше 5.250 м3 в сутки",
    },
    {
      id: 2,
      title: "Вы сами производите бетон или являетесь посредниками?",
      text: "Мы с гордостью сообщаем, что сами производим бетон. Наш завод оснащен современным оборудованием и укомплектован специалистами, которые контролируют каждый этап производства. Это позволяет нам гарантировать высокое качество нашего бетона и обеспечивать его соответствие всем стандартам и требованиям.",
    },
    {
      id: 3,
      title: "От чего зависит стоимость кубического метра бетона?",
      text: "Стоимость кубического метра бетона зависит от нескольких ключевых факторов, включая:",
    },
    {
      id: 4,
      title: "Бывают ли проблемы с поставками бетона с ваших заводов?",
      text: "Мы стремимся обеспечить надежные и своевременные поставки бетона для всех наших клиентов. Наша команда тщательно планирует логистику и контролирует каждый этап процесса, чтобы предотвратить любые возможные задержки или проблемы. Тем не менее, в строительной отрасли могут возникать непредвиденные обстоятельства, такие как погодные условия или дорожные проблемы, которые могут повлиять на расписание доставки.Мы всегда готовы реагировать на такие ситуации оперативно и предпринимать необходимые меры для минимизации влияния на наших клиентов. Если у вас есть какие-либо конкретные вопросы или требования относительно поставок, не стесняйтесь обсудить их с нашей командой. Ваше удовлетворение и успех в проекте для нас важны, и мы работаем над тем, чтобы обеспечить вам наилучший сервис.",
    },
  ];
  const images = [
    <img
      src="https://static.tildacdn.com/tild3531-3962-4964-a261-383634646535/photo_2023-10-18_131.jpeg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
    <img
      src="https://static.tildacdn.com/tild3562-3936-4662-b738-633437613266/photo_2023-10-18_131.jpeg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
    <img
      src="https://static.tildacdn.com/tild3366-6235-4630-b135-333533376239/divt-slds__container.jpg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
    <img
      src="https://static.tildacdn.com/tild3461-3263-4831-b162-353665333635/photo_2023-10-18_131.jpeg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
    <img
      src="https://static.tildacdn.com/tild3930-3230-4634-a538-373031326361/photo_2023-10-18_131.jpeg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
    <img
      src="https://static.tildacdn.com/tild3531-3962-4964-a261-383634646535/photo_2023-10-18_131.jpeg"
      className="w-full h-48 sm:h-550 object-cover rounded-xl"
    />,
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 6000); // 3 sekund

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-[#f6f6f6]">
        <Hero />
        <Calculator />
        <Experience />
        <div
          className="img h-60 sm:h-435 w-full"
          style={{
            backgroundImage: `url('https://static.tildacdn.com/tild3863-6634-4531-a364-363333646230/_846.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Prices />
        <div className="bg-[radial-gradient(#cfcfcf_1px,transparent_1px)] bg-size-[40px_40px]">
          <Advantages />
        </div>
        <Projects />
        <LaboratoryTesting />
        <Plant />
        <div className="bg-[radial-gradient(#cfcfcf_1px,transparent_1px)] bg-size-[40px_40px] pt-6 lg:pt-32 pb-8">
          <Equipment />
        </div>
        <Carousel slides={images} interval={3000} />
        <Sertifikat />
        <div className="img lg:h-435 w-full lg:mb-20 overflow-hidden">
          <img
            src="https://static.tildacdn.com/tild6364-3039-4438-b862-363963336234/Frame_2444.svg"
            className="w-full object-contain"
            alt=""
          />
        </div>
        <Info />
        <CalculationBiton />
        <div className="container-base my-10">
          <h1 className="text-center text-32 lg:text-[42px] font-bold text-[#263841] mb-10">
            Мы ответили на самые частые вопросы
          </h1>

          {faqData.map((item) => (
            <Accordion key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
        <Adress />
      </main>
      <Footer />
      <div className="fixed bottom-2 right-0 sm:right-4 z-50">
        <div
          className={`${
            cookie ? "flex" : "hidden"
          } info w-11/12 sm:w-550 h-52 bg-[#ebebeb] items-center justify-around rounded-md p-2`}
        >
          <h4 className="font-montserrat text-center sm:text-left text-[15px] text-secondary font-light">
            Пользуясь сайтом, вы принимаете политику cookie
          </h4>
          <button
            onClick={() => setCookie(false)}
            className="rounded-sm border border-gray-soft h-8 w-14"
          >
            OK
          </button>
        </div>
        <div
          className={`${
            open
              ? "-top-28 w-12 h-12 right-14 shadow-[0px_0px_20px_0px_#0000004d]"
              : "-top-14 w-[60px] h-[60px] right-12 shadow-[0px_0px_20px_5px_#0000004d]"
          } icon rounded-full flex justify-center items-center absolute cursor-pointer transition duration-200 ease-in-out`}
          onClick={() => setOpen(true)}
        >
          <img
            src="https://static.tildacdn.com/tild3862-6230-4032-a436-323564633964/Group.svg"
            alt="icon phone"
          />
        </div>
        <div
          className={`${
            open ? "flex shadow-[0px_0px_20px_5px_#0000004d]" : "hidden"
          } icon w-[60px] h-[60px] rounded-full bg-white justify-center items-center absolute -top-14 right-12 cursor-pointer`}
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            onClick={() => setOpen(false)}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      <Modal
        open={show}
        onClose={() => setShow(false)}
        className="xl:w-[1000px] xl:h-screen"
      >
        <div className="content flex justify-between w-full h-full relative">
          <div className="img w-1/2 h-full lg:flex hidden">
            <img
              src="https://static.tildacdn.com/tild3331-3361-4238-b539-356161663334/Airbrush-OBJECT-REMO.jpg"
              alt="modal img"
              className="object-cover w-full"
            />
          </div>
          <div className="form w-full lg:w-1/2 px-4">
            <img
              className="w-1/2"
              src="https://static.tildacdn.com/tild6666-6136-4632-b664-386636376664/image_10png.webp"
              alt="logo img"
            />
            <h1 className="font-bold text-xl sm:text-3xl font-montserrat my-3">
              Сложный выбор?
            </h1>
            <div className="my-2 text-18 sm:text-xl font-normal font-montserrat">
              Мы поможем! <br />
              Для вас <strong>ПРОМОКОД</strong>
            </div>
            <Button className="w-full h-76 bg-gray-200 text-orange font-semibold text-18 sm:text-3xl rounded-10">
              БEТОНСИТИСТРОЙ2025
            </Button>
            <div className="flex items-center justify-between w-full my-4">
              <p className="text-sm sm:text-xl font-normal font-montserrat">
                назовите его оператору <br /> и зафиксируйте скидку
              </p>
              <h1 className="text-3xl sm:text-5xl text-orange font-bold font-montserrat">
                10%
              </h1>
            </div>
            <div className="form-phone flex flex-col">
              <PhoneNumberInput
                className="h-14 sm:h-76 w-full rounded-10"
                value={phone}
                onChange={setPhone}
                setError={setError}
              />
              {error && <span className="text-red-500 text-xs">{error}</span>}
              <label className="inline-flex items-center gap-3 my-2 cursor-pointer">
                <FancyCheckbox
                  checked={someState}
                  onChange={(v) => setSomeState(v)}
                />
                <span className="inline-block text-xs font-space-grotesk text-check">
                  Даю согласие на обработку своих персональных данных
                </span>
              </label>
            </div>
            <Button className="h-14 sm:h-76 w-270 my-4 bg-orange text-white px-[15px] rounded-10 font-space-grotesk text-base">
              Заказать
            </Button>
            <div className="footer">
              <p className="text-sm sm:text-18">
                Для оптовых покупателей у нас <br /> есть особое предложение
              </p>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div
            onClick={() => setShow(false)}
            className="svg absolute top-0 right-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef9c1c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setOpen(false)}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;
