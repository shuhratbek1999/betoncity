import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      img: "https://optim.tildacdn.com/tild3738-6463-4665-b733-306233326438/-/cover/148x148/center/center/-/format/webp/786c1f80-bf95-40c2-8.png.webp",
      title: "Доступные цены",
    },
    {
      id: 2,
      img: "https://optim.tildacdn.com/tild6366-3535-4464-b864-393564366461/-/cover/148x148/center/center/-/format/webp/e50a0df6-1c07-4bc4-9.png.webp",
      title: "Более 7 лет на рынке",
    },
    {
      id: 3,
      img: "https://optim.tildacdn.com/tild3538-3761-4330-b866-633965353832/-/cover/148x148/center/center/-/format/webp/191d4018-01ba-4535-b.png.webp",
      title: "Эксперты в области производства бетона",
    },
    {
      id: 4,
      img: "https://optim.tildacdn.com/tild3837-3438-4039-b835-366361623162/-/cover/148x148/center/center/-/format/webp/8b3c9b81-4b53-4832-9.png.webp",
      title: "Профессиональный сервис",
    },
    {
      id: 5,
      img: "https://optim.tildacdn.com/tild3763-6637-4061-b731-626365383230/-/cover/148x148/center/center/-/format/webp/72860038-f777-4b56-a.png.webp",
      title: "Высокое качество",
    },
  ];
  return (
    <div className="mt-20 container-base">
      <h4 className="text-orange font-bold font-montserrat text-[15px] md:text-18 text-center my-6">
        БЕТОНСИТИСТРОЙ
      </h4>
      <h1 className="text-secondary -ml-2 tracking-tight text-xl w-[108%] lg:text-5xl font-bold md:text-center">
        Надежный партнер с большим опытом
      </h1>

      <nav className="my-12">
        {/* Mobil uchun qatlamlar */}
        <div className="grid grid-cols-2 w-full gap-6 sm:grid-cols-5 sm:gap-6 place-items-center">
          {/* 1-qator */}
          {experiences.slice(0, 2).map((ex) => (
            <div key={ex.id} className="flex flex-col items-center">
              <img
                className="w-[74px] h-[74px] sm:w-90 sm:h-90 mb-2 md:mb-6 object-contain"
                src={ex.img}
                alt={ex.title}
              />
              <h4 className="text-center w-full text-sm leading-5 sm:text-18 sm:leading-[18px] font-bold font-space-grotesk text-gray-soft">
                {ex.title}
              </h4>
            </div>
          ))}

          {/* 2-qator: 4-chi element markazda */}
          <div className="col-span-2 flex justify-center sm:col-span-1">
            <div className="flex flex-col items-center">
              <img
                className="w-[74px] h-[74px] sm:w-90 sm:h-90 mb-2 md:mb-6 object-contain"
                src={experiences[3].img}
                alt={experiences[3].title}
              />
              <h4 className="text-center max-w-[90%] text-sm leading-5 sm:text-18 sm:leading-[18px] font-bold font-space-grotesk text-gray-soft">
                {experiences[3].title}
              </h4>
            </div>
          </div>

          {/* 3-qator: 3 va 5 elementlar */}
          {[experiences[2], experiences[4]].map((ex) => (
            <div key={ex.id} className="flex flex-col items-center">
              <img
                className="w-[74px] h-[74px] sm:w-90 sm:h-90 mb-2 md:mb-6 object-contain"
                src={ex.img}
                alt={ex.title}
              />
              <h4 className="text-center w-full text-sm leading-5 sm:text-18 sm:leading-[18px] font-bold font-space-grotesk text-gray-soft">
                {ex.title}
              </h4>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Experience;
