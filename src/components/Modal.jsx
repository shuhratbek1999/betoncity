import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  open,
  onClose,
  children,
  width = "auto",
  height = "auto",
  maxWidth = "90%",
  maxHeight = "90%",
  className = "",
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              width,
              height,
              maxWidth,
              maxHeight,
            }}
            className={`bg-white rounded-2xl shadow-xl p-6 ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
