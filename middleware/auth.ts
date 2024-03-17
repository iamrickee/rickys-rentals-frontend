import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isLoggedIn } from '@/actions/auth/auth'

export async function middleware(request: NextRequest) {
    try {
        const loggedIn = await isLoggedIn()
        if (!loggedIn) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        return NextResponse.next()
    } catch (e) {
        console.log("login error: " + e)
    }
}