import React, { useEffect, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Министерство обороны РФ",
      text: "Компания успешно осуществила поставку бетона для строительства первой отапливаемой станции метро 'Новомосковская'в Москве, несмотря на сложности, связанные с нестандартными инженерными решениями.",
      shipCount: 3000,
      concrete_type: "М350 Гранит",
      img: "https://static.tildacdn.com/tild6436-6438-4337-b361-376165653761/1.jpg",
    },
    {
      id: 2,
      title: "Московский Метрополитен",
      text: "Компания успешно осуществила поставку бетона для строительства первой отапливаемой станции метро 'Новомосковская' в Москве, несмотря на сложности, связанные с нестандартными инженерными решениями.",
      shipCount: 3500,
      concrete_type: "М400 Гранит",
      img: "https://static.tildacdn.com/tild3536-3164-4437-b231-613837653732/1_1.jpg",
    },
    {
      id: 3,
      title: "МКЦИБ «Вороновское»",
      text: "Обеспечен бетоном объект строительства на территории Новой Москвы - МКЦИБ «Вороновское» на Калужском шоссе. Указом мэра Москвы было дано поручение о строительстве новой больницы для лечения больных COVID-19. Компания показала высокий уровень, поставив необходимое количество бетона в сжатые сроки.",
      shipCount: 3000,
      concrete_type: "М300 Гранит",
      img: "https://static.tildacdn.com/tild6465-6531-4437-a136-336662313639/1_2.jpg",
    },
    {
      id: 4,
      title: "Мосводоканал",
      text: "На протяжении лет компания эффективно сотрудничает с Мосводоканалом, поставляя строительные материалы для инженерных сетей в Москве и области.",
      shipCount: 1500,
      concrete_type: "М500 Гранит",
      img: "https://static.tildacdn.com/tild6238-3935-4166-b865-643930303236/1_3.jpg",
    },
    {
      id: 5,
      title: "ЦВКГ им. П.В. Мандрыка",
      text: "В 2023 году компания участвовала в строительстве и реконструкции военного госпиталя под патронажем Минобороны Российской Федерации (Серебряный пер. д.4 с1 , Кривоникольский пер., д.8).",
      shipCount: 3000,
      concrete_type: "М350 и М400 Гравий",
      img: "https://static.tildacdn.com/tild6161-6161-4762-b665-363631653031/noroot.png",
    },
    {
      id: 6,
      title: "Инженерные сети и сооружения",
      text: "Более 5 лет участвуем в строительстве инженерных коммуникации для водоснабжения и водоотведения по Москве и Московской области.",
      shipCount: 15000,
      concrete_type: "М200 и М350",
      img: "https://static.tildacdn.com/tild3231-3431-4662-a534-633362363932/noroot.png",
    },
    {
      id: 7,
      title: "Муниципальные школы и Гимназии",
      text: "Более 5 лет участвуем в строительстве инженерных коммуникации для водоснабжения и водоотведения по Москве и Московской области.",
      shipCount: 15000,
      concrete_type: "М350",
      img: "https://static.tildacdn.com/tild3937-3235-4264-b437-663131353365/noroot.png",
    },
    {
      id: 8,
      title: "Частное строительство",
      text: "Более 5 лет участвуем в строительстве инженерных коммуникации для водоснабжения и водоотведения по Москве и Московской области.",
      shipCount: 15000,
      concrete_type: "М200 и М350",
      img: "https://static.tildacdn.com/tild3161-3565-4931-b436-353333323731/noroot.png",
    },
  ];
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Infinity loop (mod)
  const slideWidthPercent = 100 / 4; // Desktop uchun translateX formula

  const offset = slideWidthPercent * index;
  const total = projects.length;
  return (
    <div className="container-base my-20">
      <h1 className="text-32 lg:text-5xl text-center font-space-grotesk text-secondary font-bold">
        Наши проекты
      </h1>
      <h4 className="text-22 text-center font-space-grotesk text-gray-soft font-normal my-8">
        Гордимся реальными работами: Смотрите, что мы создали!
      </h4>
      <div className="overflow-hidden relative w-full">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <svg
            width="30px"
            height="30px"
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
                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                fill="#0F0F0F"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="XMLID_287_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="next">
                {" "}
                <g>
                  {" "}
                  <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <div
          className="flex transition-transform duration-700 my-6"
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          {projects.map((item) => (
            <div
              key={item.id}
              className="shrink-0 
              w-full 
              sm:w-1/2 
              lg:w-1/4 
              p-4"
            >
              <div className="rounded-xl bg-white shadow-sm h-full">
                <img
                  src={item.img}
                  className="w-full h-auto mx-auto object-contain rounded-xl"
                  alt=""
                />
                <div className="info px-4 py-2">
                  <h3 className="text-left mt-4 text-18 font-space-grotesk text-secondary font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-left text-sm mt-2 font-space-grotesk leading-5">
                    {item.text}
                  </p>
                  <div className="footer my-4 flex flex-col gap-2">
                    <div className="footer_count flex items-center gap-2">
                      <img
                        src="https://static.tildacdn.com/tild3361-3635-4333-b939-383737623633/cubsvg.png"
                        alt="image count"
                      />
                      <span>Отгрузили {item.shipCount}м³</span>
                    </div>
                    <div className="footer_type flex items-center gap-2">
                      <img
                        src="https://static.tildacdn.com/tild3164-3137-4538-b265-616336376330/image_2svg.png"
                        alt="image count"
                      />
                      <span>Тип бетона: {item.shipCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
