'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Building, CheckCircle, Loader2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

const paymentFormSchema = z.object({
  paymentProof: z
    .any()
    .refine(files => files?.length === 1, 'Payment proof is required.')
    .refine(files => files?.[0]?.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      files => ['image/jpeg', 'image/png', 'application/pdf'].includes(files?.[0]?.type),
      '.jpg, .png, and .pdf files are accepted.'
    ),
});

type PaymentFormValues = z.infer<typeof paymentFormSchema>;

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
  },
];

const tierBenefits = {
    worker: "Your early membership benefits will be processed",
    employer: "Your early membership + workforce development program will be processed",
    partner: "Your partnership application will be reviewed"
}

function PaymentFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const fullName = searchParams.get('fullName') || 'there';
  const fee = searchParams.get('fee') || '0';
  const tier = searchParams.get('tier') || 'worker';
  
  const benefitText = tierBenefits[tier as keyof typeof tierBenefits] || "Your submission will be processed";

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = async (values: PaymentFormValues) => {
    // Handle the file upload and submission logic here
    console.log(values.paymentProof[0]);
    setIsSuccess(true);
  };
  
  if (isSuccess) {
      return (
         <AlertDialog open={isSuccess} onOpenChange={() => router.push('/')}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <div className="flex justify-end">
                     <button onClick={() => router.push('/')} className="p-1 rounded-full hover:bg-muted">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="text-center pb-6">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <AlertDialogTitle className="text-2xl">Registration Complete!</AlertDialogTitle>
                    <AlertDialogDescription className="mt-2 text-lg text-muted-foreground">
                        Welcome to the PAGR ecosystem.
                    </AlertDialogDescription>
                </div>
                </AlertDialogHeader>
                <div className="bg-primary/5 p-4 rounded-md text-center space-y-2">
                    <p className="font-semibold text-green-600">✅ Payment Successful!</p>
                    <p className="text-foreground">🎉 Welcome to PAGR, {fullName}!</p>
                    <p className="text-sm text-muted-foreground">🎁 {benefitText}</p>
                </div>
            </AlertDialogContent>
        </AlertDialog>
      )
  }
  
  if(fee === 'Free'){
      // Immediately show success for free tier.
      // A different flow could exist for partners, but this handles the current request.
      setIsSuccess(true);
      return null;
  }

  return (
    <section className="w-full bg-primary/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Payment Processing</CardTitle>
            <CardDescription>
              Please make a payment of <span className="font-bold text-foreground">₦{fee}</span> to one of the accounts below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8 space-y-6">
              {bankingPartners.map((partner) => (
                <div key={partner.bankName} className="flex gap-4 rounded-md border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                    <Building className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{partner.bankName}</h4>
                    <p className="text-sm text-muted-foreground">{partner.accountName}</p>
                    <p className="text-sm font-mono text-foreground">{partner.accountNumber}</p>
                  </div>
                </div>
              ))}
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="paymentProof"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Payment Screenshot</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/jpeg,image/png,application/pdf"
                          onChange={e => field.onChange(e.target.files)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" type="button" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Form
                  </Button>
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    I have sent payment
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function PaymentForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentFormComponent />
    </Suspense>
  );
}
