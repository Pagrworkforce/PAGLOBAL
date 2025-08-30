import {
  Bot,
  BrainCircuit,
  Fingerprint,
  Landmark,
  Scale,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { JobXpatTool } from './ai/jobxpat-tool';
import { MezziahAssistant } from './ai/mezziah-assistant';

const pillars = [
  {
    id: 'workid',
    name: 'WorkID',
    title: 'Digital Proof of Work',
    icon: Fingerprint,
    problem:
      'Millions of Africans work every day, but lack a verifiable record of their contributions, leaving them invisible to better opportunities.',
    solution:
      'A Digital Work Identity (WorkID) that captures, verifies, and authenticates workers’ skills, history, and performance.',
    examples: [
      'A bank teller’s WorkID shows verified customer service hours, fraud-free transactions, and internal certifications.',
      'A boutique sales attendant’s WorkID tracks customer feedback, daily sales closed, and shifts completed.',
      'A bricklayer’s WorkID records number of projects completed, quality ratings from clients, and work photos.',
    ],
  },
  {
    id: 'secondbank',
    name: 'SecondBank',
    title: 'Bank of Time & Effort',
    icon: Landmark,
    problem:
      'Many workers are underpaid, unbanked, or excluded from traditional finance.',
    solution:
      'A system that converts time & effort into digital currency (Workoin). Workers earn Workoin for hours spent on jobs or verified productive tasks, redeemable for airtime, data, savings, or cash.',
    examples: [
      'A nurse earns Workoin for every verified night shift. She redeems tokens for transport stipends or microloans.',
      'A ride-hailing driver logs hours worked and converts them to airtime for customers or savings.',
      'A street vendor’s logged sales time earns Workoin, which she uses for mobile data to attract online customers.',
    ],
  },
  {
    id: 'jobxpat',
    name: 'JobXpat',
    title: 'AI-powered Training & Recruitment Hub',
    icon: BrainCircuit,
    problem:
      'There’s a skills mismatch — companies need talent, but youth lack employable skills.',
    solution:
      'Businesses upload their knowledge & SOPs → JobXpat converts it into role-based interactive courses for assessments, certifications, and AI interviews. Smart recruitment matches workers to employers.',
    examples: [
      'A bank uploads its onboarding manual → AI turns it into interactive training for new recruits, certified with JobXpat AI interviews.',
      'A logistics company uploads its delivery SOP → drivers train on the platform and get certified for safety compliance.',
      'A tailoring shop records its sewing process → AI turns it into micro-learning modules, training apprentices with certificates.',
    ],
  },
  {
    id: 'mezziah',
    name: 'Mezziah',
    title: 'AI Guide for Life & Work',
    icon: Bot,
    problem:
      'Workers lack personalized support for decisions in money, work, health, and growth.',
    solution:
      'An AI assistant that provides daily, contextual guidance—from financial planning to career advice, wellness, and productivity tips.',
    examples: [
      'An accountant asks Mezziah for work-life balance tips and financial planning for savings.',
      'A mechanic gets advice from Mezziah on customer pricing strategies and affordable healthcare.',
      'A food hawker gets daily AI prompts on hygiene practices and small business growth tips.',
    ],
  },
  {
    id: 'libra',
    name: 'Libra',
    title: 'Worker Protection & Advocacy Hub',
    icon: Scale,
    problem: 'Workers face exploitation, unfair dismissal, and lack of legal voice.',
    solution:
      'A digital community & advocacy hub for rights education, anonymous reporting, and collective bargaining.',
    examples: [
      'An oil company engineer reports unsafe working conditions anonymously through Libra.',
      'A factory worker learns his rights on fair wages and contracts via Libra.',
      'A cleaner gets help drafting a simple contract to protect her from non-payment by clients.',
    ],
  },
];

export function PillarsSection() {
  return (
    <section id="platforms" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              The 5 Pillars of PAGR
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Together, these pillars form Africa’s Workforce Infrastructure, empowering workers and transforming how employers build, manage, and protect talent.
            </p>
          </div>
        </div>
        <Tabs defaultValue="workid" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {pillars.map((pillar) => (
              <TabsTrigger key={pillar.id} value={pillar.id} className="gap-2">
                <pillar.icon className="h-4 w-4" />
                {pillar.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {pillars.map((pillar) => (
            <TabsContent key={pillar.id} value={pillar.id} className="mt-6">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="font-headline text-2xl font-semibold text-primary">
                  {pillar.name}: {pillar.title}
                </h3>
                <div className="mt-4 grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">The Problem</h4>
                      <p className="mt-1 text-muted-foreground">
                        {pillar.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">The Solution</h4>
                      <p className="mt-1 text-muted-foreground">
                        {pillar.solution}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Use Cases</h4>
                    <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {pillar.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {pillar.id === 'jobxpat' && <JobXpatTool />}
                {pillar.id === 'mezziah' && <MezziahAssistant />}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
