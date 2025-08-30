import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Cpu, Link2, ScrollText, Sparkles, Target, Users, Bot } from 'lucide-react';

const missionPoints = [
    {
        icon: Link2,
        title: 'Unify',
        description: 'Connect all workers under one comprehensive infrastructure system'
    },
    {
        icon: Sparkles,
        title: 'Beautify',
        description: 'Transform work into dignified, valuable, and respected activity'
    },
    {
        icon: Cpu,
        title: 'Digitalize',
        description: 'Leverage technology to capture, verify, and reward all forms of work'
    },
]

const coreValues = [
    {
        icon: Building,
        title: 'Infrastructure',
        description: 'Building the backbone for how workers live, earn, and grow across the continent.'
    },
    {
        icon: Target,
        title: 'African Focus',
        description: 'Designed specifically for African workers, addressing unique challenges and opportunities.'
    },
    {
        icon: Link2,
        title: 'Integration',
        description: 'Five pillars working together to create comprehensive workforce support.'
    },
    {
        icon: Bot,
        title: 'Innovation',
        description: 'Leveraging AI, data, and technology to revolutionize how work is valued and rewarded.'
    },
]

const teamMembers = [
    {
        fallback: 'V',
        name: 'The Visionaries',
        role: 'Founders & Builders',
        description: 'A team of passionate innovators committed to transforming work into wealth for Africa.'
    },
    {
        fallback: 'C',
        name: 'Community Leaders',
        role: 'Local Champions',
        description: 'Grassroots leaders who understand the real challenges and opportunities in their communities.'
    },
    {
        fallback: 'T',
        name: 'Technology Experts',
        role: 'Platform Architects',
        description: "World-class developers and designers building the infrastructure for Africa's work revolution."
    },
]


export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                🏛️ About PAGR
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Point Assiduous Global Resource - Nigeria's first Workforce Infrastructure Company
              </p>
            </div>
          </div>
        </section>

        <section id="mission" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
                 <div className="flex items-center justify-center gap-2">
                    <ScrollText className="h-8 w-8 text-primary"/>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Our Mission
                    </h2>
                 </div>
              <p className="mt-4 text-lg text-muted-foreground">
                "To unify, beautify, and digitalize Africa's workforce."
              </p>
               <p className="mt-4 text-muted-foreground">
                We are solving the fragmented, unfair, and underdeveloped work ecosystem by creating five integrated pillars that give every worker — from corporate executives to market traders — identity, value, skills, guidance, and protection.
              </p>
            </div>
             <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {missionPoints.map(point => (
                    <div key={point.title} className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <point.icon className="h-8 w-8 text-primary"/>
                        </div>
                        <h3 className="text-xl font-bold">{point.title}</h3>
                        <p className="mt-2 text-muted-foreground">{point.description}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>

        <section id="values" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Values</h2>
                    <p className="mt-2 text-muted-foreground md:text-lg">
                        The principles that guide every decision and platform we build
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {coreValues.map(value => (
                        <Card key={value.title} className="text-center">
                            <CardHeader className="items-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                                    <value.icon className="h-8 w-8 text-accent"/>
                                </div>
                                <CardTitle>{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="team" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                     <div className="flex items-center justify-center gap-2">
                        <Users className="h-8 w-8 text-primary"/>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                    </div>
                    <p className="mt-2 text-muted-foreground md:text-lg">
                       Passionate individuals working together to transform Africa's work landscape
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {teamMembers.map(member => (
                        <Card key={member.name} className="p-6">
                            <div className="flex items-start gap-4">
                                <Avatar className="h-12 w-12 text-xl">
                                    <AvatarFallback>{member.fallback}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-sm font-semibold text-primary">{member.role}</p>
                                    <p className="mt-2 text-muted-foreground">{member.description}</p>
                                </div>
                            </div>
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
