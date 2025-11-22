import { useState } from "react";

export default function Accordion({ title, text }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t last:border-b border-black py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between"
      >
        <span className="text-base text-left font-bold text-[#272727] font-space-grotesk">
          {title}
        </span>
        <svg
          className={`w-7 h-7 transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-soft font-medium font-space-grotesk text-base leading-6 my-4">
          {text}
        </p>
      </div>
    </div>
  );
}
