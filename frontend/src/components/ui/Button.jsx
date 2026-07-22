export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      className={`
        ${variants[variant]}
        px-6
        py-3
        rounded-2xl
        font-semibold
        shadow-lg
        hover:shadow-purple-500/30
        transition-all
        duration-300
        hover:-translate-y-1
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}