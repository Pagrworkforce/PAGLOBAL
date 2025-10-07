import { cn } from '@/lib/utils';

export function PagrLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={cn(className)}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10ZM50 26C36.7452 26 26 36.7452 26 50C26 63.2548 36.7452 74 50 74C63.2548 74 74 63.2548 74 50C74 36.7452 63.2548 26 50 26Z"
            fill="currentColor"
        />
        <path
            d="M50 0L30 30H70L50 0Z"
            fill="hsl(var(--background))"
        />
    </svg>
  );
}
