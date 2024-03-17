'use client'

import { login } from '@/actions/auth/auth'
import Heading from '@/components/Utils/Heading'

export default function Login() {

    return (
        <main className="container py-6">
            <Heading text="Admin Login" level={1} />
            <form action={login} method="POST" className="max-w-[480px] mx-auto mt-12">
                <div className="columns-1">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="username" placeholder="Username" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="password" name="password" placeholder="Password" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top text-center">
                        <input type="submit" value="Submit" className="mt-4 py-3 px-14 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors" />
                        <p className="text-left mt-8">Need an account? <a href="/register" className="text-blue-700 underline underline-offset-4 decoration-1">Register Here.</a></p>
                    </div>
                </div>
            </form>
        </main>
    )
}
