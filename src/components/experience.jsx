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
    <div className="container-base my-20">
      <h4 className="text-orange font-bold font-montserrat text-18 text-center my-6">
        БЕТОНСИТИСТРОЙ
      </h4>
      <h1 className="text-secondary lg:text-5xl font-bold text-center">
        Надежный партнер с большим опытом
      </h1>

      <nav className="my-12">
        <ul className="grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 lg:grid-cols-5 place-items-center">
          {experiences.map((ex, i) => (
            <li
              key={ex.id}
              className={`${
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              } flex flex-col items-center`}
            >
              <img
                className="w-[74px] h-[74px] sm:w-90 sm:h-90 mb-6 object-contain"
                src={ex.img}
                alt={ex.title}
              />
              <h4 className="text-center max-sm:w-10/12 text-sm leading-5 sm:text-18 sm:leading-[18px] font-bold font-space-grotesk text-gray-soft">
                {ex.title}
              </h4>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Experience;
