export function HorseMark({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={className}
    >
      {/* Replace with your actual horse logo SVG */}
      <path d="M50 10 C60 20, 70 30, 75 45 C80 60, 75 75, 65 85 C55 95, 40 90, 35 80 C30 70, 35 60, 45 55 C55 50, 65 45, 70 35 C75 25, 65 15, 50 10 Z" />
      <circle cx="50" cy="25" r="8" />
      <path d="M35 40 C25 45, 20 55, 22 65" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}