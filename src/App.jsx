import { useState } from "react";
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
function App() {
  const [count, setCount] = useState(0);
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
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Experience />
        <Prices />
        <div className="bg-[radial-gradient(#cfcfcf_1px,transparent_1px)] bg-size-[40px_40px]">
          <Advantages />
        </div>
        <Projects />
        <LaboratoryTesting />
        <Plant />
        <Equipment />
        <Carousel slides={images} interval={3000} />
        <Sertifikat />
        <div
          className="img h-60 sm:h-435 w-full"
          style={{
            backgroundImage: `url('https://static.tildacdn.com/tild6364-3039-4438-b862-363963336234/Frame_2444.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
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
        <Footer />
      </main>
    </>
  );
}

export default App;
