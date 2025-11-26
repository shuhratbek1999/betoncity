import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  children,
  maxWidth = "90%",
  maxHeight = "90%",
  className = "",
}) {
  // ESC bilan yopish
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center"
          onClick={onClose} // fon bosilganda yopiladi
        >
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              maxWidth,
              maxHeight,
            }}
            className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}
            onClick={(e) => e.stopPropagation()} // ichki bosish modalni yopmaydi
          >
            {/* Close (Tilda style) */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ef9c1c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
