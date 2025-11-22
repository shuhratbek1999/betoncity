import React, { useState } from "react";
import PhoneNumberInput from "./Phone";
import Button from "./Button";
import FancyCheckbox from "./checkbox";

const Plant = () => {
  const [someState, setSomeState] = useState(false);
  return (
    <div className="container-base relative top-32 mb-60 sm:mb-40">
      <h1 className="lg:text-5xl text-center sm:text-left font-bold font-space-grotesk text-secondary mt-48 sm:mt-0">
        Проведем экскурсию по заводу
      </h1>
      <h4 className="font-space-grotesk text-center sm:text-left font-normal lg:text-2xl text-gray-soft my-4">
        а так же ответим на все вопросы которые могли <br /> у вас возникнуть
      </h4>
      <div className="buttons flex flex-col sm:flex-row gap-4 my-4">
        <PhoneNumberInput className="h-52 lg:w-270 rounded-10" />
        <Button className="bg-orange h-52 rounded-10 text-white px-4 font-bold">
          Записаться на экскурсию
        </Button>
      </div>
      <label className="inline-flex items-center gap-3 cursor-pointer">
        <FancyCheckbox checked={someState} onChange={(v) => setSomeState(v)} />
        <span className="inline-block text-sm text-black font-arial">
          Даю согласие на обработку своих персональных данных
        </span>
      </label>
      <img
        className="absolute right-12 -top-60 sm:-top-12 w-10/12 sm:w-1/3"
        src="https://static.tildacdn.com/tild6430-6233-4662-a133-383530376361/Layer_1_5.png"
        alt="images"
      />
    </div>
  );
};

export default Plant;
