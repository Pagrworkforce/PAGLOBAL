import { cn } from '@/lib/utils';
import Image from 'next/image';

export function PagrLogo({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Image
        src="https://i.imgur.com/Tk9cSEK.jpeg"
        alt="PAGR Logo"
        width={28}
        height={28}
        className="rounded-full"
      />
    </div>
  );
}
