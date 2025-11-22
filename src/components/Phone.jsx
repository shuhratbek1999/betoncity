import React from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneNumberInput({ value, onChange, setError }) {
  const validate = (val) => {
    onChange(val);

    if (!val) {
      setError("Введите номер телефона");
      return;
    }

    if (isValidPhoneNumber(val)) {
      setError("");
    } else {
      setError("Неверный номер телефона");
    }
  };

  return (
    <div className="bg-phone flex items-center px-4 rounded-10">
      <PhoneInput
        defaultCountry="UZ"
        international
        withCountryCallingCode
        value={value}
        onChange={validate}
        numberInputProps={{
          className: "bg-transparent focus:outline-none h-12",
        }}
      />
    </div>
  );
}
