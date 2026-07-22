export default function Textarea({
  className = "",
  ...props
}) {
  return (
    <textarea
      rows={8}
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
        resize-none
        focus:border-purple-500
        transition-all
        duration-300
        ${className}
      `}
      {...props}
    />
  );
}