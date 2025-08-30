'use server';
/**
 * @fileOverview This file defines a Genkit flow for the Mezziah AI assistant,
 * providing personalized guidance on work-life balance, financial planning, and other relevant topics.
 *
 * - aiWorkLifeAssistant - A function that calls the Mezziah AI assistant flow.
 * - AIWorkLifeAssistantInput - The input type for the aiWorkLifeAssistant function.
 * - AIWorkLifeAssistantOutput - The return type for the aiWorkLifeAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIWorkLifeAssistantInputSchema = z.object({
  query: z
    .string()
    .describe("The user's query for work-life balance, financial planning, or other relevant topics."),
});
export type AIWorkLifeAssistantInput = z.infer<typeof AIWorkLifeAssistantInputSchema>;

const AIWorkLifeAssistantOutputSchema = z.object({
  response: z.string().describe('The personalized guidance from the Mezziah AI assistant.'),
});
export type AIWorkLifeAssistantOutput = z.infer<typeof AIWorkLifeAssistantOutputSchema>;

export async function aiWorkLifeAssistant(input: AIWorkLifeAssistantInput): Promise<AIWorkLifeAssistantOutput> {
  return aiWorkLifeAssistantFlow(input);
}

const mezziahPrompt = ai.definePrompt({
  name: 'mezziahPrompt',
  input: {schema: AIWorkLifeAssistantInputSchema},
  output: {schema: AIWorkLifeAssistantOutputSchema},
  prompt: `You are Mezziah, an AI assistant providing personalized guidance on work-life balance, financial planning, and other relevant topics.

  Respond to the following query:
  {{{query}}}

  Provide helpful and actionable advice.
  Assume the persona of a helpful, friendly, and professional AI assistant.
  Keep your responses concise and easy to understand.
  `,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const aiWorkLifeAssistantFlow = ai.defineFlow(
  {
    name: 'aiWorkLifeAssistantFlow',
    inputSchema: AIWorkLifeAssistantInputSchema,
    outputSchema: AIWorkLifeAssistantOutputSchema,
  },
  async input => {
    const {output} = await mezziahPrompt(input);
    return output!;
  }
);
