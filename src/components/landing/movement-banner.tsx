import { Check, ScrollText, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

const comparisonData = [
    { feature: 'Time = Income (SecondBank)', pagr: true, traditional: false },
    { feature: 'Digital Work Identity', pagr: true, traditional: false, pagrText: "WorkID" },
    { feature: 'Street AI Assistant', pagr: true, traditional: false, pagrText: "Mezziah" },
    { feature: 'AI-based Training & Hiring', pagr: true, traditional: false, pagrText: "JobXpat" },
    { feature: 'Worker Advocacy Platform', pagr: true, traditional: false, pagrText: "Libra ♎️" },
    { feature: 'Grassroots-first Design', pagr: true, traditional: false, pagrText: "Built for informal + formal" },
]

export function MovementBanner() {
  return (
    <section className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <ScrollText className="h-8 w-8 text-primary"/>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                            The Philosophy
                        </h2>
                    </div>
                    <Card className="border-l-4 border-accent">
                        <CardContent className="pt-6">
                            <p className="text-2xl font-semibold italic text-foreground">
                                "If you work, you should never be poor."
                            </p>
                        </CardContent>
                    </Card>

                    <p className="text-muted-foreground">This isn't just a product. It's a philosophy, a policy, and a platform for justice.</p>
                    <ul className="space-y-2 text-lg">
                        <li className="font-semibold">Work is not slavery.</li>
                        <li className="font-semibold">Work is not punishment.</li>
                        <li className="font-semibold text-primary">Work is divine.</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        🔍 What Makes PAGR Different?
                    </h2>
                     <Card>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Feature</TableHead>
                                        <TableHead className="text-center text-primary">PAGR</TableHead>
                                        <TableHead className="text-center">Traditional Systems</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {comparisonData.map((row) => (
                                        <TableRow key={row.feature}>
                                            <TableCell className="font-medium">{row.feature}</TableCell>
                                            <TableCell className="text-center">
                                                {row.pagr ? (
                                                    <div className="flex flex-col items-center justify-center">
                                                        <Check className="h-6 w-6 text-green-500" />
                                                        {row.pagrText && <span className="text-xs text-muted-foreground">{row.pagrText}</span>}
                                                    </div>
                                                ) : <X className="mx-auto h-6 w-6 text-red-500" />}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {row.traditional ? <Check className="mx-auto h-6 w-6 text-green-500" /> : <X className="mx-auto h-6 w-6 text-red-500" />}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="mt-20 text-center">
                 <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                    🚀 Be part of Africa’s Workforce Revolution.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  PAGR isn’t just a platform. It’s a movement. Join us in building a
                  future where every worker can thrive.
                </p>
                <Button size="lg" className="mt-8" asChild>
                  <Link href="/contact#join">👉 Register Today</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
