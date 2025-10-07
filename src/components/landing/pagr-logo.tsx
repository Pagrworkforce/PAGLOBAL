import { cn } from '@/lib/utils';

export function PagrLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={cn(className)}
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
      <path
        d="M35 35 V 65 H 45 V 50 H 55 C 63.28 50 70 43.28 70 35 H 60 C 60 37.76 57.76 40 55 40 H 45 V 35 H 35 Z"
        fill="currentColor"
      />
    </svg>
  );
}
