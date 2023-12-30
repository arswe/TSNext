import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 404 })
  }

  return NextResponse.json({ id: 1, name: 'John Doe' })
}