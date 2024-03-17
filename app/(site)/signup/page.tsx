'use client'

import Heading from '@/components/Utils/Heading'

export default function Register() {
    return (
        <main className="container py-6">
            <Heading text="Admin Login" level={1} />
            <form action="/register" className="max-w-[480px] mx-auto mt-12">
                <div className="columns-1">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="username" placeholder="Username" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="password" name="password" placeholder="Password" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="password" name="password_confirm" placeholder="Confirm Password" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top text-center">
                        <input type="submit" value="Submit" className="mt-4 py-3 px-14 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors" />
                        <p className="text-left mt-8">Already have an account? <a href="/login" className="text-blue-700 underline underline-offset-4 decoration-1">Login.</a></p>
                    </div>
                </div>
            </form>
        </main>
    )
}
