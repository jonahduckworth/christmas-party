import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email } = await request.json();

    const rsvp = await prisma.rsvp.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return NextResponse.json(rsvp);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create RSVP" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      orderBy: { timestamp: "desc" },
    });
    return NextResponse.json(rsvps);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch RSVPs" },
      { status: 500 },
    );
  }
}
