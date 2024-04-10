'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getAPIURL, getAuthHeader } from '@/utils/api'

export async function login(formData: FormData) {
    const response = await fetch(getAPIURL()+"/login", {
        method: 'POST',
        headers: {
            "Authorization": getAuthHeader(),
        },
        body: formData
    })
    const data = await response.json()
    if (data.profile !== undefined && data.profile.name != "" && data.profile.token != "") {
        setCookies(data.profile.name, data.profile.token)
        redirect('/admin')
    } else {
        let warning = 'Login failed'
        switch (data.message) {
            case 'sql: no rows in result set':
                warning = 'Incorrect username and password combination'
                break;
        }
        redirect('/login?error='+warning)
    }
}

export async function logout(formData: FormData) {
    cookies().delete('rr_authtoken')
    cookies().delete('rr_username')
    redirect('/login')
}

export async function setCookies(username: string, token: string) {
    cookies().set('rr_authtoken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })
    cookies().set('rr_username', username, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })
}