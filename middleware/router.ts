import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { middleware as authMiddleware } from '@/middleware/auth'

export function routeMiddleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        return authMiddleware(request)
    }
    return NextResponse.next()
}