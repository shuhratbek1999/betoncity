export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  const baseStyle =
    "px-4 py-2 transition-colors duration-300 focus:outline-none";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
