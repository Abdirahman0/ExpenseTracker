export function Button({ children, onClick, type = "button", variant = "default" }) {
  const baseStyle = "px-4 py-2 rounded text-white";
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600",
    outline: "border border-gray-500 text-gray-700",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
