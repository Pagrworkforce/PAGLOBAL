'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CheckCircle, Loader2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog';
import { sendTelegramNotification } from '@/actions/send-telegram-notification';


const industries = [
  'Agriculture & Farming',
  'Retails & Trade',
  'Fashion & Beauty',
  'Hospitality & Hotels',
  'Real Estate & Construction',
  'Health & Social Care',
  'Technology & ICT',
  'Education & Training',
  'Transportation & Logistics',
  'Manufacturing & Production',
  'Entertainment & Media',
  'Finance & Banking',
  'Energy & Power',
  'Legal & Governance',
  'Others (please specify)',
];

const experienceLevels = ['Entry-level', 'Mid-level', 'Senior', 'Expert'];
const companySizes = ['Startup (1-10 employees)', 'Small (11-50 employees)', 'Medium (51-250 employees)', 'Large (251+ employees)'];

const baseSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  industry: z.string({ required_error: 'Please select an industry.' }),
  otherIndustry: z.string().optional(),
});

const workerSchema = baseSchema.extend({
    skills: z.string().min(3, 'Please list at least one skill.'),
    experienceLevel: z.string({ required_error: 'Please select your experience level.' }),
    goals: z.string().min(10, 'Please tell us a bit about your goals.'),
    companyName: z.string().optional(),
    companySize: z.string().optional(),
    workforceNeeds: z.string().optional(),
});

const employerSchema = baseSchema.extend({
    companyName: z.string().min(2, 'Company name must be at least 2 characters.'),
    companySize: z.string({ required_error: 'Please select your company size.' }),
    workforceNeeds: z.string().min(10, 'Please describe your workforce needs.'),
    skills: z.string().optional(),
    experienceLevel: z.string().optional(),
    goals: z.string().optional(),
});

const partnerSchema = baseSchema.extend({
    companyName: z.string().min(2, 'Organization name must be at least 2 characters.'),
    workforceNeeds: z.string().min(10, 'Please describe your partnership goals.'),
    skills: z.string().optional(),
    experienceLevel: z.string().optional(),
    goals: z.string().optional(),
    companySize: z.string().optional(),
});


const tierDetails = {
  worker: {
    title: 'Join as Worker',
    description: 'Access WorkID, SecondBank, JobXpat training, and more.',
    fee: '2000',
    submitText: 'Proceed to Payment',
    schema: workerSchema,
  },
  'worker-freetrial': {
    title: 'Worker Membership (Free Trial)',
    description: 'Get a feel for the PAGR movement before committing.',
    fee: 'Free',
    submitText: 'Start Free Trial',
    schema: baseSchema, // Only basic info needed for free trial
  },
  employer: {
    title: 'Employer Partnership',
    description: 'Access our talent pool and workforce infrastructure.',
    fee: '10000',
    submitText: 'Proceed to Payment',
    schema: employerSchema,
  },
  partner: {
    title: 'Strategic Partnership',
    description: 'Government, NGO, or institutional collaboration.',
    fee: 'Free',
    submitText: 'Submit Application',
    schema: partnerSchema,
  },
};

function getFormSchema(tier: string, isFree: boolean) {
    if (tier === 'worker' && isFree) {
        return tierDetails['worker-freetrial'].schema;
    }
    const schema = tierDetails[tier as keyof typeof tierDetails]?.schema || workerSchema;
    return schema.refine(data => {
        if (data.industry === 'Others (please specify)') {
            return !!data.otherIndustry && data.otherIndustry.length > 0;
        }
        return true;
    }, {
        message: 'Please specify your industry',
        path: ['otherIndustry'],
    });
}


function RegistrationFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const tier = searchParams.get('tier') || 'worker';
  const isFreeTrial = searchParams.get('free') === 'true';
  const tierKey = tier === 'worker' && isFreeTrial ? 'worker-freetrial' : tier;
  const details = tierDetails[tierKey as keyof typeof tierDetails] || tierDetails.worker;
  
  const formSchema = getFormSchema(tier, isFreeTrial);
  type FormValues = z.infer<typeof formSchema>;


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      skills: '',
      goals: '',
      otherIndustry: '',
      companyName: '',
      workforceNeeds: '',
    },
  });

  const watchedIndustry = form.watch('industry');

  const onSubmit = async (values: FormValues) => {
    try {
        const submissionTier = tier === 'worker' && isFreeTrial ? 'worker-freetrial' : tier;
        await sendTelegramNotification(values, submissionTier);

        if (details.fee === 'Free') {
            setIsSuccess(true);
            return;
        }
        
        const params = new URLSearchParams({
            tier,
            fee: details.fee,
            fullName: values.fullName,
            email: values.email,
        });
        router.push(`/payment?${params.toString()}`);

    } catch (error) {
        console.error('Failed to send notification', error);
        toast({
            title: 'Submission Failed',
            description: 'There was a problem submitting your registration. Please try again.',
            variant: 'destructive'
        })
    }
  };

  if (isSuccess && details.fee === 'Free') {
      const successTitle = isFreeTrial ? "Free Trial Activated!" : "Application Submitted!";
      const successDescription = isFreeTrial
        ? "Welcome to PAGR! You can now explore the basic features of our ecosystem."
        : "Thank you for your interest in partnering with PAGR. We will be in touch shortly.";

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
                    <AlertDialogTitle className="text-2xl">{successTitle}</AlertDialogTitle>
                    <AlertDialogDescription className="mt-2 max-w-sm mx-auto text-muted-foreground">
                        {successDescription}
                    </AlertDialogDescription>
                </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
      )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">{details.title}</CardTitle>
            <CardDescription>{details.description}</CardDescription>
            <div className="pt-4">
                <p className='text-sm text-muted-foreground'>Registration Fee</p>
                <p className="font-headline text-4xl font-bold">{details.fee === 'Free' ? 'Free' : `₦${parseInt(details.fee).toLocaleString()}`}</p>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 08012345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {tier === 'worker' && !isFreeTrial && (
                        <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your primary skills</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., carpentry, coding, sales" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {(tier === 'employer' || tier === 'partner') && (
                         <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>{tier === 'employer' ? 'Company/Organization Name' : 'Organization Name'}</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Acme Inc." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Industry Selection</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an industry" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {industries.map(industry => (
                                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    {watchedIndustry === 'Others (please specify)' && (
                         <FormField
                            control={form.control}
                            name="otherIndustry"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Please Specify Industry</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Freelance Writing" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tier === 'worker' && !isFreeTrial && (
                        <FormField
                            control={form.control}
                            name="experienceLevel"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Experience Level</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your experience level" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {experienceLevels.map(level => (
                                            <SelectItem key={level} value={level}>{level}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                     {tier === 'employer' && (
                        <FormField
                            control={form.control}
                            name="companySize"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Company Size</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your company size" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {companySizes.map(level => (
                                            <SelectItem key={level} value={level}>{level}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                 </div>
                 {tier === 'worker' && !isFreeTrial && (
                    <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Tell us about your career goals and why you want to join PAGR...</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="I want to..."
                                className="min-h-[100px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                 )}
                  {(tier === 'employer' || tier === 'partner') && (
                    <FormField
                        control={form.control}
                        name="workforceNeeds"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{tier === 'employer' ? 'Describe your workforce needs and partnership goals...' : 'Describe your partnership goals...'}</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="We are looking for..."
                                className="min-h-[100px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                  )}
                 <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:justify-between">
                    <Button variant="outline" type="button" onClick={() => router.back()} className="w-full sm:w-auto">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>
                    <Button type="submit" disabled={form.formState.isSubmitting} className="w-full sm:w-auto">
                      {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {details.submitText}
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


export function RegistrationForm() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegistrationFormComponent />
        </Suspense>
    )
}
