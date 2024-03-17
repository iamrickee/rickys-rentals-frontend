import type { NextRequest } from 'next/server'
import { routeMiddleware } from '@/middleware/router'

export function middleware(request: NextRequest) {
    return routeMiddleware(request)
}