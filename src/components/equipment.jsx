const Equipment = () => {
  const equipments = [
    {
      id: 1,
      name: "Автобетоносмесители",
      img: "https://static.tildacdn.com/tild6233-3035-4234-a334-633661303465/d848452d-3f68-4f35-8.png",
      free: 1,
      space: "5/7/8/9/10/12м3",
      tray_length: "1,5-2м.",
      feed_head: "1м.",
    },
    {
      id: 2,
      name: "Самосвалы",
      img: "https://static.tildacdn.com/tild3062-3463-4464-b232-373761386238/fa92679c-347e-440a-9.png",
      free: 1,
      space: "5/7/8/9/10/12м3",
    },
    {
      id: 3,
      name: "Бетононасос стреловой",
      img: "https://static.tildacdn.com/tild6663-6261-4361-b931-353930666436/493577d0-65c1-4d5b-8.png",
      space: "5/7/8/9/10/12м3",
      arrow_length: "18/24/28/36/52м",
    },
  ];
  return (
    <div className="container-base mb-12 lg:h-[600px] flex flex-col md:items-center lg:items-start lg:flex-row justify-center">
      <div className="info w-full md:w-10/12 lg:w-6/12">
        <h1 className="font-space-grotesk leading-8 lg:leading-14 text-center sm:text-left font-bold text-32 lg:text-5xl text-secondary">
          У нас есть вся необходимая техника
        </h1>
        <h4 className="font-space-grotesk leading-8 text-center sm:text-left text-2xl font-normal text-secondary my-2 sm:my-10">
          Вам не нужно беспокоиться и дополнительно <br /> обращаться в другие
          компании.
        </h4>
        <div className="foter flex gap-2 items-center">
          <img
            src="https://static.tildacdn.com/tild3962-3065-4265-b361-346362346164/solar_stars-line-duo.png"
            alt="logo"
            className="w-10 h-10"
          />
          <span className="inline-block text-base font-space-grotesk font-medium text-secondary">
            Все техника сертифицирована Ростест
          </span>
        </div>
      </div>
      <div className="equipments w-full md:w-10/12 lg:w-6/12 flex flex-col items-end gap-4">
        {equipments.map((ex) => (
          <div
            key={ex.id}
            className="flex flex-col w-full lg:w-11/12 sm:flex-row justify-between gap-4 border-b-2 border-b-orange pb-1"
          >
            <div className="eq_img w-full flex justify-center sm:justify-start sm:w-1/2">
              <img
                className="h-150 w-260 sm:w-full object-contain"
                src={ex.img}
                alt={ex.name}
              />
            </div>
            <div className="info w-full sm:w-1/2">
              <h2 className="text-18 font-bold font-space-grotesk text-secondary mb-3">
                {ex.name}
              </h2>
              <div className="extra my-1.5 flex justify-between items-center">
                <h6 className="text-gray-soft text-sm font-space-grotesk font-normal">
                  Бесплатная выгрузка:
                </h6>
                <p className="text-secondary font-space-grotesk text-sm font-bold">
                  {ex.free}ч.
                </p>
              </div>
              <div className="extra my-1.5 flex justify-between items-center">
                <h6 className="text-gray-soft text-sm font-space-grotesk font-normal">
                  Объем:
                </h6>
                <p className="text-secondary font-space-grotesk text-sm font-bold">
                  {ex.space}
                </p>
              </div>
              <div className="extra my-1.5 flex justify-between items-center">
                <h6 className="text-gray-soft text-sm font-space-grotesk font-normal">
                  Длина лотка:
                </h6>
                <p className="text-secondary font-space-grotesk text-sm font-bold">
                  {ex.arrow_length}
                </p>
              </div>
              <div className="extra my-1.5 flex justify-between items-center">
                <h6 className="text-gray-soft text-sm font-space-grotesk font-normal">
                  Высота подачи:
                </h6>
                <p className="text-secondary font-space-grotesk text-sm font-bold">
                  {ex.feed_head}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
