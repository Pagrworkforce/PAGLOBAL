import { Button } from '../ui/button';
import Link from 'next/link';

export function MovementBanner() {
  return (
    <section className="w-full bg-primary py-12 md:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">
          🚀 Be part of Africa’s Workforce Revolution.
        </h2>
        <p className="max-w-2xl text-primary-foreground/80">
          PAGR isn’t just a platform. It’s a movement. Join us in building a
          future where every worker can thrive.
        </p>
        <Button size="lg" variant="secondary" className="mt-4" asChild>
          <Link href="#workers">👉 Register Today</Link>
        </Button>
      </div>
    </section>
  );
}
