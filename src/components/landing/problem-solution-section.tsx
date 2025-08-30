import { Building, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ProblemSolutionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Card className="border-l-4 border-destructive">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <Lightbulb className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-2xl">
                  The Problem
                </CardTitle>
                <p className="mt-1 text-lg font-semibold text-muted-foreground">
                  Africa's work ecosystem is fragmented, unfair, and
                  underdeveloped.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Millions of workers — from corporate executives to market
                traders — lack proper identity verification, financial
                inclusion, skills development, career guidance, and legal
                protection.
              </p>
              <p className="mt-4 font-medium text-foreground">
                Workers remain poor, undervalued, and invisible despite their
                efforts.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-primary">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="font-headline text-2xl">
                  The Solution: Workforce Infrastructure
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                PAGR creates five integrated pillars giving every worker
                identity, value, skills, guidance, and protection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
