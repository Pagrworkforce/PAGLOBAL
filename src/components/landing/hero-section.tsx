import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <Image
        src="https://equitablegrowth.org/wp-content/uploads/2025/05/Job-quality-1080x675.jpeg"
        alt="African workforce"
        data-ai-hint="african workforce"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Transforming Work into Wealth, Dignity & Opportunity.
            </h1>
            <p className="text-lg text-gray-200 md:text-xl">
              Point Assiduous Global Resource (PAGR) is Nigeria’s first
              Workforce Infrastructure Company — building the backbone for how
              workers live, earn, and grow across Africa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact#workers">👉 Join as a Worker</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact#employers">👉 Join as an Employer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
