import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneNumberInput({ value, onChange }) {
  return (
    <div className="bg-phone flex items-center px-4 rounded-10 ">
      <PhoneInput
        className="bg-transparent px-3 py-2 focus:outline-none"
        placeholder="(000) 000-00-00"
        defaultCountry="RU" // O'zbekiston
        value={value}
        onChange={onChange}
        international
      />
    </div>
  );
}
