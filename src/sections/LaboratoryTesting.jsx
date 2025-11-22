const LaboratoryTesting = () => {
  const testing = [
    {
      id: 1,
      img: "https://optim.tildacdn.com/tild3132-3534-4565-b435-366462303732/-/format/webp/fill.jpg.webp",
      title: "Испытания",
      desc: "Это ключевые моменты в производстве бетона. Они обеспечивают высокие стандарты и безопасность каждого продукта.",
      info_img:
        "https://optim.tildacdn.com/tild3763-3461-4335-b266-336230333165/-/cover/150x150/center/center/-/format/webp/solar_widget-5-line-.png.webp",
    },
    {
      id: 2,
      img: "https://static.tildacdn.com/tild3331-6235-4132-b339-366535363866/fill_1.jpg",
      title: "Процесс",
      desc: "Включает в себя проверку и анализ бетона на прочность, плотность, морозостройкость и водонепроницаемость. Для нас очень важно, чтобы все показатели соответствовали строительным требованиям.",
      info_img:
        "https://optim.tildacdn.com/tild3937-3538-4534-b365-663161323165/-/cover/150x150/center/center/-/format/webp/solar_widget-5-line-.png.webp",
    },
    {
      id: 3,
      img: "https://static.tildacdn.com/tild3361-6535-4533-b134-323266396262/fill_2.jpg",
      title: "Качество",
      desc: "и точность-результат наших испытаний. Мы гарантируем, что выбрав нашу продукцию-вы получите надежный и безопасный материал для своих проектов.",
      info_img:
        "https://static.tildacdn.com/tild3333-3563-4963-b336-383463393335/Layer_1.png",
    },
  ];
  const experiences = [
    {
      id: 1,
      img: "https://static.tildacdn.com/tild3135-3933-4236-b136-666239666265/Layer_1_1.png",
      title: "Наши заводы производятдо 100м3/ч.",
    },
    {
      id: 2,
      img: "https://optim.tildacdn.com/tild6335-3630-4362-b936-653238356133/-/cover/180x180/center/center/-/format/webp/Layer_1_2.png.webp",
      title: "Разовый замес мешалки 3м3",
    },
    {
      id: 3,
      img: "https://static.tildacdn.com/tild6139-6339-4637-b037-323936666163/Layer_1_3.png",
      title: "Утепленные бункера для прогрева нерудных материалов",
    },
    {
      id: 4,
      img: "https://static.tildacdn.com/tild3161-3637-4839-b934-376261636532/Layer_1_4.png",
      title: "Система подачи воды в зимних условиях",
    },
  ];
  return (
    <div className="container-base my-10">
      <h1 className="text-32 lg:text-5xl text-center font-space-grotesk text-secondary font-bold">
        Лабораторные испытания продукции
      </h1>
      <h4 className="text-22 text-center font-space-grotesk text-gray-soft font-normal my-8">
        Наука за каждым кубическим метром - исследования и бетон высочайшего
        качества
      </h4>
      <div className="content flex flex-col gap-2 sm:gap-8">
        {testing.map((t) => (
          <div
            key={t.id}
            className="content_item flex flex-col sm:flex-row justify-between gap-2 sm:gap-20 relative"
          >
            <div className="content-img sm:w-6/12">
              <img src={t.img} alt={t.title} className="rounded-10" />
            </div>
            <div className="content-info w-full sm:w-6/12">
              <img
                src={t.info_img}
                alt={t.title}
                className="block absolute right-5/12 top-1/3 sm:top-0 sm:right-138"
              />
              <h2 className="font-bold text-center sm:text-left font-space-grotesk text-32 text-secondary mt-0 sm:mt-24 mb-4">
                {t.title}
              </h2>
              <p className="w-full text-center sm:text-left sm:w-8/12 text-secondary font-space-grotesk lg:text-18">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <nav className="my-12 w-full flex justify-center">
        <ul className="flex items-center w-11/12 justify-center gap-2 sm:gap-0 sm:justify-between flex-wrap">
          {experiences.map((ex) => (
            <li
              key={ex.id}
              className="flex items-center justify-center w-5/12
               sm:w-1/4"
            >
              <a href="#" className="flex flex-col items-center justify-center">
                <img
                  className="h-76 w-76 lg:w-90 lg:h-90 mb-6"
                  src={ex.img}
                  alt={ex.title}
                />
                <h4 className="text-center w-2/3 sm:w-9/12 text-sm leading-3.5 sm:text-18 sm:leading-4 font-bold font-space-grotesk text-gray-soft">
                  {ex.title}
                </h4>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LaboratoryTesting;
