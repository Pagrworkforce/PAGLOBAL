'use server';
/**
 * @fileOverview An AI agent that generates role-based interactive training courses from business knowledge and SOPs.
 *
 * - generateTrainingCourse - A function that handles the training course generation process.
 * - GenerateTrainingCourseInput - The input type for the generateTrainingCourse function.
 * - GenerateTrainingCourseOutput - The return type for the generateTrainingCourse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTrainingCourseInputSchema = z.object({
  knowledgeAndSOPs: z
    .string()
    .describe(
      'The knowledge and standard operating procedures (SOPs) of the business.'
    ),
  role: z.string().describe('The role for which the training course is being created.'),
});
export type GenerateTrainingCourseInput = z.infer<typeof GenerateTrainingCourseInputSchema>;

const GenerateTrainingCourseOutputSchema = z.object({
  courseContent: z.string().describe('The generated content for the training course.'),
  assessmentQuestions: z
    .string()
    .describe('The generated assessment questions for the training course.'),
});
export type GenerateTrainingCourseOutput = z.infer<typeof GenerateTrainingCourseOutputSchema>;

export async function generateTrainingCourse(input: GenerateTrainingCourseInput): Promise<GenerateTrainingCourseOutput> {
  return generateTrainingCourseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTrainingCoursePrompt',
  input: {schema: GenerateTrainingCourseInputSchema},
  output: {schema: GenerateTrainingCourseOutputSchema},
  prompt: `You are an AI assistant designed to generate training course content and assessment questions for businesses, based on uploaded knowledge and SOPs, tailored for a specific role.

You will receive the knowledge and standard operating procedures (SOPs) of the business, as well as the role for which the training course is being created.

Your task is to generate engaging and informative training course content based on the provided information. Also create relevant assessment questions to test the understanding of the trainee.

Knowledge and SOPs: {{{knowledgeAndSOPs}}}
Role: {{{role}}}

Course Content:
Assessment Questions: `,
});

const generateTrainingCourseFlow = ai.defineFlow(
  {
    name: 'generateTrainingCourseFlow',
    inputSchema: GenerateTrainingCourseInputSchema,
    outputSchema: GenerateTrainingCourseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
