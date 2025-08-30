'use client';

import type { GenerateTrainingCourseOutput } from '@/ai/flows/ai-generated-training-courses';
import { generateTrainingCourse } from '@/ai/flows/ai-generated-training-courses';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  role: z.string().min(3, 'Role must be at least 3 characters long.'),
  knowledgeAndSOPs: z
    .string()
    .min(50, 'Knowledge & SOPs must be at least 50 characters long.'),
});

type FormValues = z.infer<typeof formSchema>;

export function JobXpatTool() {
  const [result, setResult] = useState<GenerateTrainingCourseOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: '',
      knowledgeAndSOPs: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setResult(null);
    try {
      const res = await generateTrainingCourse(values);
      setResult(res);
    } catch (error) {
      console.error(error);
      toast({
        title: 'An error occurred',
        description:
          'Failed to generate training course. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
      <h4 className="mb-4 text-lg font-semibold text-card-foreground">
        Try the AI Course Generator
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Customer Service Agent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="knowledgeAndSOPs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Knowledge & SOPs</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste your business knowledge and standard operating procedures here..."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Course
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="mt-8 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">
            Our AI is crafting your course...
          </p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generated Course Content</CardTitle>
              <CardDescription>
                Based on the information you provided for the role of{' '}
                <span className="font-semibold text-primary">
                  {form.getValues('role')}
                </span>
                .
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none rounded-md border bg-background/50 p-4 text-foreground">
                <pre className="whitespace-pre-wrap font-body">
                  {result.courseContent}
                </pre>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Assessment Questions</CardTitle>
              <CardDescription>
                Use these questions to test understanding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none rounded-md border bg-background/50 p-4 text-foreground">
                <pre className="whitespace-pre-wrap font-body">
                  {result.assessmentQuestions}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
