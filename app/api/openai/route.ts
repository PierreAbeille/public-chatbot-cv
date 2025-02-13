import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

const maxDuration = 30;

const model = openai('gpt-4o-mini');

const system = "Prompt System"

export const runtime = 'edge';

export async function POST(req: Request, res: Response) {
    
    const {messages} = await req.json();
    
    const result = await streamText({
        model,
        system,
        messages,
        temperature: 0.7,
        maxTokens: 300,
        topP: 0.1,
        frequencyPenalty: 1,
        presencePenalty: 0,
    });
    
    return result.toAIStreamResponse();
}