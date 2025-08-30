import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Fingerprint,
  Landmark,
  Scale,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    id: 'workid',
    name: 'WorkID',
    title: 'Digital Proof of Work',
    icon: Fingerprint,
    description:
      "A digital identity that captures and verifies a worker's skills, history, and contributions — like a 'work passport.'",
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    details: {
      features: [
        {
          type: 'Formal',
          text: "A banker with 5 years' experience gets instant verification for a job abroad",
        },
        {
          type: 'Semi-formal',
          text: "A tailor who trained 30 apprentices has their work rated and verified",
        },
        {
          type: 'Informal',
          text: "A bricklayer's completed projects are logged and endorsed by clients",
        },
      ],
      benefits: [
        'Workers get instant credibility and global mobility',
        'Employers get faster verification and reduced fraud',
      ],
    },
  },
  {
    id: 'secondbank',
    name: 'SecondBank',
    title: 'Bank of Time & Effort',
    icon: Landmark,
    description:
      'A time-based financial system that converts productive hours into digital currency (Workoin/Time Credits) redeemable for...',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'jobxpat',
    name: 'JobXpat',
    title: 'AI-powered Training & Recruitment Hub',
    icon: BrainCircuit,
    description:
      'An AI platform where businesses upload knowledge. AI converts it into role-based interactive courses, with assessments, ...',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'mezziah',
    name: 'Mezziah',
    title: 'AI Guide for Life',
    icon: Bot,
    description:
      'An AI mentor that provides contextual guidance for career, financial literacy, and work-life balance decisions.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'libra',
    name: 'Libra',
    title: 'Worker Protection & Advocacy',
    icon: Scale,
    description:
      'A digital community & advocacy hub that educates workers about rights, provides anonymous reporting, and links them to l...',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
];

const infrastructure = [
  { name: 'Identity', platform: 'WorkID', icon: Fingerprint },
  { name: 'Value/Finance', platform: 'SecondBank', icon: Landmark },
  { name: 'Skills', platform: 'JobXpat', icon: BrainCircuit },
  { name: 'Guidance', platform: 'Mezziah', icon: Bot },
  { name: 'Protection', platform: 'Libra', icon: Scale },
];

const synergyPoints = [
  {
    title: 'Data Flow',
    description:
      'WorkID feeds SecondBank with work data, which creates value for SkillToken rewards, while Mezziah provides guidance and Libra ensures protection.',
  },
  {
    title: 'Value Creation',
    description:
      'Every action across platforms builds your reputation, increases earning potential, and unlocks new opportunities in the ecosystem.',
  },
  {
    title: 'Protection Layer',
    description:
      'Libra monitors all platforms for fair treatment, while Mezziah provides real-time guidance to navigate challenges and maximize benefits.',
  },
  {
    title: 'Growth Engine',
    description:
      'The more you engage with any platform, the more valuable you become across all platforms, creating a compounding effect on your career and income.',
  },
];

export default function PlatformsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                🧱 Our Innovation Platforms
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Five interconnected platforms designed to transform work into
                wealth, dignity, and opportunity for every African worker.
              </p>
            </div>
          </div>
        </section>

        <section
          id="pillars"
          className="w-full bg-primary/5 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                🔑 The 5 Pillars of PAGR
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                Nigeria's first Workforce Infrastructure Company
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pillars.slice(0, 3).map((pillar) => (
                <Card
                  key={pillar.id}
                  className="flex transform flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader className="items-center text-center">
                    <div
                      className={`mb-4 rounded-full border p-4 shadow-sm ${pillar.bgColor}`}
                    >
                      <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">
                      {pillar.name}
                    </CardTitle>
                    <p className="font-semibold text-muted-foreground">
                      {pillar.title}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col text-center">
                    <p className="flex-grow text-muted-foreground">
                      {pillar.description}
                    </p>
                    <Accordion type="single" collapsible className="w-full mt-6">
                      <AccordionItem value="item-1" className="border-none">
                        <div className="flex gap-4">
                           <AccordionTrigger className="w-full justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:hidden">
                             Read More
                           </AccordionTrigger>
                          <Button className="w-full" asChild>
                             <Link href="/contact#join">
                                Join Now <ArrowRight className="ml-2 h-4 w-4" />
                             </Link>
                          </Button>
                        </div>
                        <AccordionContent className="mt-4 text-left">
                           {pillar.details ? (
                                <div className="space-y-4 rounded-md border bg-background/50 p-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                            {pillar.details.features.map(feature => (
                                                <li key={feature.type}>
                                                    <span className="font-semibold text-foreground/80">{feature.type}: </span>{feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Benefits:</h4>
                                         <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                            {pillar.details.benefits.map(benefit => (
                                                <li key={benefit}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-sm p-4 text-center">More details coming soon...</p>
                            )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {pillars.slice(3).map((pillar) => (
                <Card
                  key={pillar.id}
                  className="flex transform flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardHeader className="items-center text-center">
                    <div
                      className={`mb-4 rounded-full border p-4 shadow-sm ${pillar.bgColor}`}
                    >
                      <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">
                      {pillar.name}
                    </CardTitle>
                    <p className="font-semibold text-muted-foreground">
                      {pillar.title}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col text-center">
                    <p className="flex-grow text-muted-foreground">
                      {pillar.description}
                    </p>
                     <Accordion type="single" collapsible className="w-full mt-6">
                      <AccordionItem value="item-1" className="border-none">
                        <div className="flex gap-4">
                           <AccordionTrigger className="w-full justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:hidden">
                             Read More
                           </AccordionTrigger>
                          <Button className="w-full" asChild>
                             <Link href="/contact#join">
                                Join Now <ArrowRight className="ml-2 h-4 w-4" />
                             </Link>
                          </Button>
                        </div>
                        <AccordionContent className="mt-4 text-left">
                           {pillar.details ? (
                                <div className="space-y-4 rounded-md border bg-background/50 p-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                            {pillar.details.features.map(feature => (
                                                <li key={feature.type}>
                                                    <span className="font-semibold text-foreground/80">{feature.type}: </span>{feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Benefits:</h4>
                                         <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                            {pillar.details.benefits.map(benefit => (
                                                <li key={benefit}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-sm p-4 text-center">More details coming soon...</p>
                            )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="infrastructure" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                🌍 Africa's First Workforce Infrastructure
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {infrastructure.map((item) => (
                <Card key={item.name} className="p-4 text-center">
                  <item.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold text-muted-foreground">
                    {item.name}
                  </p>
                  <h3 className="text-lg font-bold">{item.platform}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="synergy"
          className="w-full bg-primary/5 py-12 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                🔗 How They Work Together
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                Each platform strengthens the others, creating a comprehensive
                ecosystem.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {synergyPoints.map((point) => (
                <Card key={point.title} className="p-6">
                  <h3 className="font-headline text-xl font-bold text-primary">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
