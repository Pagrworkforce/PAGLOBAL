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
            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
            fill="currentColor"
        />
        <path d="M50 0L30 30H70L50 0Z" fill="hsl(var(--background))" />
    </svg>
  );
}
