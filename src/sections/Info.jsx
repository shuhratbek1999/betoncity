const Info = () => {
  const informations = [
    {
      id: 1,
      title: "Где используется бетон в Москве?",
      text: "Наши клиенты часто выбирают этот материал для разных задач: от строительства фундаментов до выравнивания стяжек. Благодаря быстротвердеющим свойствам, он гарантирует идеально ровную поверхность.",
      info: "Этот материал подходит для укладки оснований тротуаров, автомобильных дорог, создания дорожек на даче или легких плит для наружной укладки.",
      img: "https://static.tildacdn.com/tild6361-3534-4233-b563-363634333731/Data.jpg",
    },
    {
      id: 2,
      title: "Основные преимущества бетона",
      text: "Преимущества материала включают в себя экономичную стоимость, долговечность, экологичность без вреда для окружения и человека, отсутствие химических ингредиентов и высокую прочность после застывания.",
      info: "Это также облегчает контроль качества.",
      img: "https://static.tildacdn.com/tild3936-6336-4235-b030-663234316337/Data_1.jpg",
    },
    {
      id: 3,
      title: "Что нужно знать при заказе бетона оптом",
      text: "Бетон обладает определёнными характеристиками: марка W2 применяется при низкой водопроницаемости, но пористость ограничивает использование возле водоемов из-за риска коррозии. Марка F50 обозначает высокую морозостойкость, а P2-P4 — гибкость бетона.",
      img: "https://static.tildacdn.com/tild3235-3637-4862-a434-393963326336/Data_2.jpg",
    },
    {
      id: 4,
      title: "Заказывайте бетон от куба по Москве и МО",
      text: "Мы тщательно относимся к каждому клиенту, с легкостью поможем решить любую задачу.Более пяти лет мы предлагаем качественную продукцию по разумным ценам, соответствующую международным стандартам и ГОСТам. Наша продукция экологична и безопасна, подходит как для промышленных сооружений, так и для использования в личных хозяйствах без вреда для здоровья.",
      img: "https://static.tildacdn.com/tild6630-6463-4066-b033-636338333435/Data_3.jpg",
    },
    {
      id: 5,
      title: "Доставка бетона по Москве и МО",
      text: "Мы обладаем опытом и эффективной технологией, чтобы удовлетворить любые заказы. Наша продукция, произведенная на современных машинах, постоянно совершенствуется и имеет гарантию качества.",
      info: "Ценим время клиентов: наш парк техники в Москве обеспечивает быструю оценку потребного объема бетона и своевременную доставку.",
      img: "https://static.tildacdn.com/tild3736-3534-4136-a132-393664643939/Data_4.jpg",
    },
  ];
  return (
    <div className="container-base -mt-10">
      <div className="info flex flex-col sm:items-center gap-2 sm:gap-16 h-auto">
        {informations.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index % 2 != 0 ? "xl:flex-row-reverse" : " "
            } flex w-[102%] sm:w-10/12 lg:w-full gap-8 flex-col-reverse xl:flex-row xl:justify-between`}
          >
            <div className="w-full xl:w-[48%] lg:-mt-4">
              <h1 className="font-space-grotesk pr-1 leading-10 xl:leading-16 font-bold text-32 lg:text-5xl text-secondary">
                {item.title}
              </h1>
              <p className="font-normal text-xl leading-6 xl:leading-7 font-space-grotesk text-secondary my-4">
                {item.text}
              </p>
              <p className="font-normal text-xl leading-6 xl:leading-7 font-space-grotesk text-secondary my-4">
                {item.info}
              </p>
            </div>
            <div
              className={`images h-56 md:h-[380px] xl:h-[400px] w-[95%] xl:w-[48%] border-[3px] border-orange rounded-10 relative`}
            >
              <img
                src={item.img}
                alt={item.title}
                className={`${
                  index % 2 != 0
                    ? "-left-3 md:left-4 -top-3"
                    : "-left-3 md:-left-4 -top-3"
                } rounded-10 object-cover absolute h-full w-full `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
