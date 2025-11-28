import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
  useEffect(() => {
    // prevRef va nextRef render bo‘lganidan keyin Swiper navigation ni init qilamiz
    if (prevRef.current && nextRef.current) {
      swiperInstance.navigation.destroy(); // eski navigation bo‘lsa
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);
  let swiperInstance;
  return (
    <div className="container-base my-20 h-auto relative" id="Проекты">
      {/* Custom Prev Button */}
      <h1 className="text-32 lg:text-5xl text-center font-space-grotesk text-secondary font-bold">
        Наши проекты
      </h1>
      <h4 className="text-xl md:text-22 text-center font-space-grotesk text-gray-soft font-normal my-4 md:my-8">
        Гордимся реальными работами: Смотрите, что мы создали!
      </h4>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperInstance = swiper)}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        className="relative overflow-visible py-10"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-xl h-[590px] border-[3px] border-orange flex flex-col overflow-hidden">
              <img src={item.img} className="w-full h-60 object-cover" alt="" />

              <div className="flex rounded-t-10 flex-col flex-1 p-4 bg-white h-[calc(580px - 240px)]">
                <h3 className="text-left text-18 font-space-grotesk text-secondary font-semibold">
                  {item.title}
                </h3>

                <p className="text-left text-sm mt-2 font-space-grotesk leading-5 overflow-hidden">
                  {item.text}
                </p>

                <div className="footer mt-4 flex flex-col gap-2">
                  <div className="footer_count flex items-center gap-2">
                    <img
                      src="https://static.tildacdn.com/tild3361-3635-4333-b939-383737623633/cubsvg.png"
                      alt="count"
                    />
                    <span className="font-space-grotesk text-sm text-secondary font-light">
                      Отгрузили {item.shipCount}м³
                    </span>
                  </div>
                  <div className="footer_type flex items-center gap-2">
                    <img
                      src="https://static.tildacdn.com/tild3164-3137-4538-b265-616336376330/image_2svg.png"
                      alt="type"
                    />
                    <span className="font-space-grotesk text-sm text-secondary font-light">
                      Тип бетона: {item.concrete_type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        className="absolute z-30 left-4 max-md:-bottom-10 lg:top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M15 4L7 12L15 20"
            stroke="#808080"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute right-4 max-md:-bottom-10 lg:top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
      >
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M9 4L17 12L9 20"
            stroke="#808080"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Projects;
