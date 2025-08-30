'use server';
/**
 * @fileOverview Summarizes the purposes of the PAGR platforms (WorkID, SecondBank, JobXpat, Mezziah, Libra).
 *
 * - summarizePlatformPurposes - A function that summarizes the purposes of the PAGR platforms.
 * - SummarizePlatformPurposesInput - The input type for the summarizePlatformPurposes function.
 * - SummarizePlatformPurposesOutput - The return type for the summarizePlatformPurposes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePlatformPurposesInputSchema = z.object({
  platformName: z.string().describe('The name of the platform to summarize (WorkID, SecondBank, JobXpat, Mezziah, Libra).'),
});
export type SummarizePlatformPurposesInput = z.infer<typeof SummarizePlatformPurposesInputSchema>;

const SummarizePlatformPurposesOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the platform’s purpose.'),
});
export type SummarizePlatformPurposesOutput = z.infer<typeof SummarizePlatformPurposesOutputSchema>;

export async function summarizePlatformPurposes(input: SummarizePlatformPurposesInput): Promise<SummarizePlatformPurposesOutput> {
  return summarizePlatformPurposesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePlatformPurposesPrompt',
  input: {schema: SummarizePlatformPurposesInputSchema},
  output: {schema: SummarizePlatformPurposesOutputSchema},
  prompt: `Summarize the purpose of the {{platformName}} platform in one concise sentence, highlighting its role in the PAGR ecosystem.`,
});

const summarizePlatformPurposesFlow = ai.defineFlow(
  {
    name: 'summarizePlatformPurposesFlow',
    inputSchema: SummarizePlatformPurposesInputSchema,
    outputSchema: SummarizePlatformPurposesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
