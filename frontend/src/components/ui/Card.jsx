export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        story-card
        rounded-3xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}