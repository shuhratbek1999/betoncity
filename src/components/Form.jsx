import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7"); // default qiymat
  const [agree, setAgree] = useState(false);

  const pageURL = typeof window !== "undefined" ? window.location.href : "";
  const utm = typeof window !== "undefined" ? window.location.search : "";

  // Telefon formatini cheklash uchun oddiy funksiya
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // +7 dan boshlanishini majburiy qilamiz
    if (!value.startsWith("+7")) {
      setPhone("+7");
      return;
    }

    // faqat +7 va raqamlar qabul qilinsin
    const cleaned = value.replace(/[^\d+]/g, "");
    setPhone(cleaned);
  };

  return (
    <form
      action="https://formsubmit.co/kozimovabduvali2006@gmail.com"
      method="POST"
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      {/* FormSubmit settings */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_subject" value="Новая заявка с сайта" />

      {/* UTM va page URL */}
      <input type="hidden" name="Page URL" value={pageURL} />
      <input type="hidden" name="UTM" value={utm} />

      {/* Name */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Имя</label>
        <input
          type="text"
          name="Name"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Телефон</label>
        <input
          type="text"
          name="Phone"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={handlePhoneChange}
          required
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Checkbox */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="Checkbox"
          checked={agree}
          value="yes"
          onChange={() => setAgree(!agree)}
          required
          className="w-4 h-4 accent-blue-500"
        />
        <span className="text-gray-700 text-sm">
          Согласие на обработку данных
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors"
      >
        Отправить
      </button>
    </form>
  );
}
