import {
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const stakeholders = [
  {
    icon: Building2,
    title: 'Governments',
    description: 'Wanting real-time data and engagement with their workforce',
  },
  {
    icon: Briefcase,
    title: 'Companies & Employers',
    description: 'Seeking smarter ways to train, certify, and track workers',
  },
  {
    icon: Users,
    title: 'Informal Workers & Hustlers',
    description: 'Wanting dignity, earnings, and support',
  },
  {
    icon: GraduationCap,
    title: 'Youth & Job Seekers',
    description: 'Searching for direction, clarity, and opportunity',
  },
  {
    icon: Globe,
    title: 'Communities',
    description: 'Needing an infrastructure of survival, not just employment',
  },
];

export function WhoWeServeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              🌍 Who PAGR Serves
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empowering every stakeholder in Africa's work ecosystem
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stakeholders.map((stakeholder) => (
            <Card
              key={stakeholder.title}
              className="group h-full text-center transition-all duration-300 hover:bg-primary/5 hover:shadow-lg"
            >
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <stakeholder.icon className="h-8 w-8 text-primary transition-colors group-hover:text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl">
                  {stakeholder.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {stakeholder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
