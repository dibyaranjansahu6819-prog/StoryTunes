export default function Input({
  className = "",
  ...props
}) {
  return (
    <input
      className={`
        w-full
        rounded-2xl
        bg-slate-900/70
        border
        border-slate-700
        px-5
        py-4
        text-white
        placeholder:text-slate-400
        focus:border-purple-500
        transition-all
        duration-300
        ${className}
      `}
      {...props}
    />
  );
}