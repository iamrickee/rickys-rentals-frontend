'use client'

import { redirect } from 'next/navigation'

export async function save(formData: FormData) {
    const response = await fetch("http://localhost:9000/verify/rentals", {
        method: 'GET',
        headers: {
            "Authorization": "Basic "+btoa("trucks:1234")
        }
    })
    //const data = await response
    console.log(response.json())
    //redirect('/admin/rent/al')
}

export async function del(formData: FormData) {
    redirect('/rentals')
}