'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const token: string = 'test-token'
    cookies().set('rr_authtoken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })
    redirect('/admin')
}

export async function logout(formData: FormData) {
    const token: string = 'test-token'
    cookies().delete('rr_authtoken')
    redirect('/login')
}

export async function isLoggedIn() {
    return cookies().get('rr_authtoken') !== undefined
}