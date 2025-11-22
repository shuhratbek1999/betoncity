import Button from "./Button";

const Sertifikat = () => {
  return (
    <div className="container-base flex flex-col sm:flex-row my-10">
      <div className="video w-full sm:w-1/2">
        <video src="blob:https://rutube.ru/be62cbcd-6144-49d5-8cc8-fc50cc69416a"></video>
      </div>
      <div className="sertifikat_info w-full sm:w-1/2">
        <img
          src="https://static.tildacdn.com/tild3665-3330-4430-b136-353462626561/solar_stars-line-duo.png"
          alt=""
          className="w-16 h-16"
        />
        <h1 className="text-2xl text-secondary font-space-grotesk font-bold">
          Наш товар сертифицирован и соответствует международным стандартам и
          ГОСТ.
        </h1>
        <p className="text-base font-normal font-space-grotesk text-secondary my-4">
          Наша компания более 5 лет производит качественный бетон по доступным
          ценам.
        </p>
        <p className="text-base font-normal font-space-grotesk text-secondary my-4">
          Он полностью экологичен и безопасен, вы можете использовать его не
          только промышленных зданиях, но и в частных домах, не боясь за свое
          здоровье.
        </p>
        <p className="text-base font-normal font-space-grotesk text-secondary my-4">
          За время работы мы выстроили наш производственный процесс так, чтобы
          удовлетворять как розничные, так и оптовые потребности наших клиентов.
        </p>
        <Button className="bg-orange border w-full sm:w-270 border-orange rounded-10 font-bold text-white shadow-[14px_12px_17px_0px_#004c981a]">
          Получить расчет стоимости
        </Button>
      </div>
    </div>
  );
};

export default Sertifikat;
