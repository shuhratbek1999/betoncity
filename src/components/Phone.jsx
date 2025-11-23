import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function PhoneNumberInput({
  value,
  onChange,
  error,
  setError = () => {}, // 🔥 DEFAULT VALUE QO‘YDIM XATO CHIQMASIN
  className = "",
}) {
  const validate = (val) => {
    if (onChange) onChange(val);

    if (!val) return setError("Введите номер телефона");
    if (val.length < 8) return setError("Неверный номер телефона");

    setError("");
  };

  return (
    <div className={`bg-phone flex items-center px-4 rounded-10 ${className}`}>
      <PhoneInput
        defaultCountry="ru"
        value={value}
        onChange={validate}
        className="w-full"
        numberInputProps={{
          className: "rounded-md px-4 focus:outline-none bg-transparent", // my Tailwind classes
        }}
        inputProps={{
          required: true,
          className: "bg-transparent focus:outline-none",
        }}
      />
    </div>
  );
}
