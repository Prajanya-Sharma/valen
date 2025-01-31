// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Normalize username (trim spaces and convert to lowercase)
  const normalizedUsername = username.trim().toLowerCase();

  // Validate username and password
  const validUsernames = ['dumbo', 'misha', 'bhoomi'];
  const isValidUsername = validUsernames.includes(normalizedUsername);
  const isValidPassword = password === process.env.VALENTINE_PASSWORD;

  if (isValidUsername && isValidPassword) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: 'Try again 😢' }, { status: 401 });
  }
}