import React from "react";
const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Соблюдение сроков поставки",
      text: "Доставляем точно в срок. Логистический отдел и собственный парк миксеров гарантируют вам стройку без задержек и хлопот.",
      img: "https://optim.tildacdn.com/tild3731-3366-4563-a137-376264643862/-/cover/622x400/center/center/-/format/webp/0a16671f-0aac-42f9-8.png.webp",
    },
    {
      id: 2,
      title: "Качественный бетон от производителя",
      text: "Наши инженеры создают бетон высшего качества. Работаем без 'недоливов'. Производим по ГОСТу.",
      img: "https://optim.tildacdn.com/tild3236-6434-4232-b334-353735646638/-/cover/644x400/center/center/-/format/webp/57d81376-2d8c-4945-8.png.webp",
    },
    {
      id: 3,
      title: "Оперативность команды менеджеров",
      text: "Наша команда менеджеров всегда на связи, готовы ответить на любой вопрос, оперативно",
      img: "https://optim.tildacdn.com/tild3766-3030-4761-b236-303265383034/-/cover/622x400/center/center/-/format/webp/4867b8f4-a03f-480e-b.png.webp",
    },
    {
      id: 4,
      title: "Гибкая система оплаты",
      text: "Удобные условия оплаты и возможность отсрочки для наших постоянных клиентов.",
      img: "https://optim.tildacdn.com/tild6234-3931-4231-b264-666665383836/-/cover/612x400/center/center/-/format/webp/cd4019e7-0000-4162-9.png.webp",
    },
    {
      id: 5,
      title: "Законность и организованность",
      text: "Свяжитесь с нами, чтобы ознакомиться с документацией и сертификатами, а также тобы посетить производство.",
      img: "https://static.tildacdn.com/tild3161-3135-4863-b436-303664623864/8227519c-262a-467e-8.png",
    },
    {
      id: 6,
      title: "Закрывающие документы",
      text: "Будьте уверены в прозрачности сделки, ведь мы предоставляем полный пакет закрывающих документов для всех наших клиентов",
      img: "https://static.tildacdn.com/tild6165-3366-4962-b062-326634303235/fbcda1ae-4a0f-459f-a.png",
    },
  ];
  return (
    <div className="container-base my-20" id="О нас">
      <h1 className="text-center font-space-grotesk text-32 lg:text-5xl text-secondary font-bold">
        Преимущества
      </h1>
      <h4 className="text-center text-22 font-montserrat font-normal text-gray-soft my-6">
        Смотрите чем мы отличаемся от других заводов-производителей
      </h4>
      <div className="advantages-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 :*:border-b *:border-secondary">
        {advantages.map((a, i) => (
          <div
            key={a.id}
            className={`
        flex flex-col items-center p-6

        ${i % 3 !== 2 ? "lg:border-r" : ""}  
        ${i < 3 ? "lg:border-b" : ""}        
        ${i >= 3 && i < 6 ? "lg:border-b-0" : ""} 
      `}
          >
            <img
              src={a.img}
              alt={a.title}
              className="lg:w-8/12 lg:h-200 object-contain"
            />

            <h2 className="text-center font-space-grotesk text-2xl text-secondary font-bold w-8/12 my-4">
              {a.title}
            </h2>

            <p className="text-center text-base font-normal font-space-grotesk text-secondary leading-5">
              {a.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
