import { useState } from "react";

export default function FancyCheckbox({ checked: initial = false, onChange }) {
  const [checked, setChecked] = useState(initial);

  function toggle() {
    const next = !checked;
    setChecked(next);
    if (onChange) onChange(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={checked}
      className={`relative flex items-center justify-center
        w-5 h-5 rounded transition-all duration-200
        ${checked ? "bg-white" : "bg-gray-100"}
        border border-gray-300`}
    >
      {/* visually-hidden real input if you need form semantics */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        className="sr-only"
        aria-hidden="true"
      />

      {/* Checkmark SVG */}
      <svg
        viewBox="0 0 24 24"
        className={`w-4 h-4 transform transition-transform duration-300
          ${checked ? "scale-100 rotate-6" : "scale-0 rotate-0"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5 12.5 L10 17 L19 7"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
