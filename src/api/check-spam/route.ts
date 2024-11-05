import { NextResponse } from 'next/server';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(request: Request) {
  const { content } = await request.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY!,
      'anthropic-version': '2024-01-01',
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'user',
          content: `Is the following party message spam? Reply with just "true" or "false": "${content}"`,
        },
      ],
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1024,
    }),
  });

  const data = await response.json();
  const isSpam = data.content[0].text === 'true';

  return NextResponse.json({ isSpam });
}
