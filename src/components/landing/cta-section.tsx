import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

const workerBenefits = [
  'Personal Development Training (Work identity, self-worth, employability).',
  'Community Support: Join an active worker community that looks out for one another.',
  'Early Worker Advantage: Be among the first to access and use WorkID when it launches.',
  'Guided Briefings on all PAGR platforms + how they benefit workers.',
  'Exclusive Member Support: Practical guidance on career, rights, and opportunities.',
];

const employerBenefits = [
  'Access verified talent across industries.',
  'Build your workforce with structured support.',
  'Partner with PAGR for just ₦10,000 as an early member.',
];

const partnerBenefits = [
    'Collaborate on large-scale workforce development.',
    'Integrate PAGR infrastructure into your programs.',
    'Direct consultation and co-creation opportunities.'
]

const freeTrialBenefits = [
    'Only a brief introduction to what PAGR is about.',
    'Get an overview of our platforms (WorkID, JobXpat, SeenX, etc).',
    'Limited time in the community (just awareness level).',
    'No personal development training or community support.',
]

export function CtaSection() {
  return (
    <section className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Card id="worker-membership-cta" className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary md:text-4xl">
                Worker Membership
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="mb-6 text-muted-foreground">
                Free Trial (Test Access). Just to "taste" the movement - then upgrade to ₦2k membership.
              </p>
              <ul className="mb-8 space-y-3 flex-grow">
                {freeTrialBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
                <Button size="lg" className="w-full md:w-auto mt-auto" asChild>
                  <Link href="/contact#worker-membership">
                    👉 Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </CardContent>
          </Card>
          <div className="grid gap-12">
            <Card id="workers-cta" className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary md:text-3xl">
                  For Workers (Paid)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-6 text-muted-foreground">
                  The real value starts here. Unlock your full potential and join a community that values your work.
                </p>
                <ul className="mb-8 space-y-3 flex-grow">
                  {workerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                  <Button size="lg" className="w-full md:w-auto mt-auto" asChild>
                    <Link href="/contact#workers">
                      👉 Join as a Worker <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardContent>
            </Card>
            <Card id="employers-cta" className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary md:text-3xl">
                  For Employers
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-6 text-muted-foreground">
                  Build a reliable, skilled, and motivated workforce with PAGR.
                </p>
                <ul className="mb-8 space-y-3 flex-grow">
                  {employerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                  <Button size="lg" className="w-full md:w-auto mt-auto" asChild>
                    <Link href="/contact#employers">
                      👉 Join as an Employer <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardContent>
            </Card>
            <Card id="partners-cta" className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary md:text-3xl">
                  Strategic Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-6 text-muted-foreground">
                  Government, NGO, or institutional collaboration.
                </p>
                <ul className="mb-8 space-y-3 flex-grow">
                  {partnerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                  <Button size="lg" className="w-full md:w-auto mt-auto" asChild>
                    <Link href="/contact#partners">
                      👉 Join for free <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
