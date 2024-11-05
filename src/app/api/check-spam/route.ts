import { NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(request: Request) {
  const { content } = await request.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      system:
        "You are a witty content moderator for a fun party planning app. Your job is to identify and flag harmful content while allowing playful, positive messages. Approve messages that spread joy and celebration, but catch any hate speech, harassment, explicit content, or malicious intent. Be lenient with harmless jokes and party themes.",
      messages: [
        {
          role: "user",
          content: `Analyze this party message and respond with just "true" if it contains harmful content (hate speech, harassment, explicit content, etc.) or "false" if it's appropriate party content: "${content}"`,
        },
      ],
      model: "claude-3-sonnet-20240229",
      max_tokens: 10,
    }),
  });

  const data = await response.json();

  const isSpam = data.content[0].text.toLowerCase() === "true";

  return NextResponse.json({ isSpam });
}
