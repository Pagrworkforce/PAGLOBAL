import {
  Bot,
  BrainCircuit,
  Fingerprint,
  Landmark,
  Scale,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const platforms = [
  {
    icon: Fingerprint,
    name: 'WorkID',
    description: 'Digital identity for every worker.',
  },
  {
    icon: Landmark,
    name: 'SecondBank',
    description: 'Inclusive financial tools designed for workers.',
  },
  {
    icon: BrainCircuit,
    name: 'JobXpat',
    description: 'Upskilling, job mobility & placement.',
  },
  {
    icon: Bot,
    name: 'Mezziah',
    description: 'Workforce protection & benefits.',
  },
  {
    icon: Scale,
    name: 'Libra',
    description: 'Fairness, advocacy & governance in work contracts.',
  },
];

export function EcosystemSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              The PAGR Ecosystem
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              PAGR connects workers and businesses through 5 powerful platforms
              that form the infrastructure of work.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="group h-full text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg"
            >
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full border bg-background p-4 shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <platform.icon className="h-8 w-8 text-primary transition-colors group-hover:text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
