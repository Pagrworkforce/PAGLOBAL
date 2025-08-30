import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Phone, Banknote, Building } from 'lucide-react';

const registrationTiers = [
  {
    title: 'Join as Worker',
    description: 'Access WorkID, SecondBank, JobXpat training, and more.',
    price: '₦2,000',
    features: ['Early membership benefits'],
    buttonText: 'Get Started',
  },
  {
    title: 'Employer Partnership',
    description: 'Access our talent pool and workforce infrastructure.',
    price: '₦10,000',
    features: ['Early membership + workforce development program'],
    buttonText: 'Get Started',
  },
  {
    title: 'Strategic Partnership',
    description: 'Government, NGO, or institutional collaboration.',
    price: 'Free',
    features: ['Direct consultation with our team'],
    buttonText: 'Get Started',
  },
];

const bankingPartners = [
    {
        bankName: 'Fidelity Bank',
        accountName: 'Point Assiduous Global Resource Ltd.',
        accountNumber: '4011453269',
    },
    {
        bankName: 'Ecobank',
        accountName: 'Point Assiduous Resource Limited',
        accountNumber: '0600058310',
    }
]

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
                📞 Get In Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Ready to transform work into wealth? Let's build the future together.
              </p>
            </div>
          </div>
        </section>

        <section id="join" className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Join the PAGR Movement
              </h2>
              <p className="mt-2 text-muted-foreground md:text-lg">
                Choose your registration type and become part of Africa's workforce revolution.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {registrationTiers.map((tier) => (
                <Card key={tier.title} className="flex transform flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">{tier.title}</CardTitle>
                    <p className="text-muted-foreground pt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <div className="mb-6">
                      <span className="font-headline text-4xl font-bold">{tier.price}</span>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                        <Button size="lg" className="w-full">
                           {tier.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact-info" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                    <p className="mt-2 text-muted-foreground md:text-lg">
                        Reach out to us directly or use our secure banking channels.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Card className="p-6">
                        <h3 className="font-headline text-2xl font-semibold text-primary">Direct Contact</h3>
                        <p className="mt-2 text-muted-foreground">Speak with our team directly.</p>
                        <div className="mt-6 flex items-center gap-4">
                            <Phone className="h-8 w-8 text-accent"/>
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <a href="tel:08146192416" className="text-lg text-muted-foreground hover:text-primary">08146192416</a>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6">
                        <h3 className="font-headline text-2xl font-semibold text-primary">Banking Partners</h3>
                        <p className="mt-2 text-muted-foreground">Secure financial infrastructure.</p>
                        <div className="mt-6 space-y-6">
                            {bankingPartners.map(partner => (
                                <div key={partner.bankName} className="flex gap-4">
                                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                                        <Building className="h-6 w-6 text-accent"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{partner.bankName}</h4>
                                        <p className="text-sm text-muted-foreground">{partner.accountName}</p>
                                        <p className="text-sm font-mono text-foreground">{partner.accountNumber}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
