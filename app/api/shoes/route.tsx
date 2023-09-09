import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session || !session.user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const shoes = await prisma.shoe.findMany()

  if (!shoes) {
    return new NextResponse('No items');
  }
  return NextResponse.json(shoes);
}
