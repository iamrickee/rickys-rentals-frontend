import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { setCookies } from '@/actions/auth/auth'
import { getAPIURL, getAuthHeader } from '@/utils/api'

export async function middleware(request: NextRequest) {
    const usernameCookie = cookies().get('rr_username')
    var username = ""
    if (usernameCookie !== undefined) {
        username = usernameCookie.value
    }
    const tokenCookie = cookies().get('rr_authtoken')
    var token = ""
    if (tokenCookie !== undefined) {
        token = tokenCookie.value
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("token", token);
    const response = await fetch(getAPIURL()+"/token", {
        method: 'POST',
        headers: {
            "Authorization": getAuthHeader(),
        },
        body: formData
    })
    const data = await response.json()
    if (data.profile !== undefined && data.profile.name != "" && data.profile.token != "") {
        setCookies(data.profile.name, data.profile.token)
        return NextResponse.next()
    } else {
        let warning = 'You are not logged in'
        return NextResponse.redirect(new URL('/login?error='+warning, request.url))
    }
}