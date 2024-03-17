'use client'

import Heading from '@/components/Utils/Heading'

export default function Reserve() {
    return (
        <main className="container py-6">
            <Heading text="Reserve a Rental" level={1} />
            <form action="/reserve/submit">
                <div className="columns-1 sm:columns-2">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="first_name" placeholder="First Name*" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="last_name" placeholder="Last Name*" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                <div className="columns-1 sm:columns-2">
                    <div className="w-full mb-7 align-top">
                        <input type="email" name="email" placeholder="Email*" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="tel" name="phone" placeholder="Phone" className="w-full py-2 px-4 text-lg" />
                    </div>
                </div>
                <div className="columns-1 sm:columns-2">
                    <div className="w-full mb-7 align-top">
                        <select name="location" className="w-full py-2 px-4 text-lg bg-white" required>
                            <option value="">Location*</option>
                            <option value="Algonquin|IL">Algonquin, IL</option>
                        </select>
                    </div>
                    <div className="w-full mb-7 align-top">
                        <select name="model" className="w-full py-2 px-4 text-lg bg-white" required>
                            <option value="">Model*</option>
                            <option value="dump_truck">Dump Truck</option>
                        </select>
                    </div>
                </div>
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top">
                        <textarea name="message" placeholder="Message" className="w-full py-2 px-4 text-lg" rows={6}></textarea>
                    </div>
                    <div className="w-full mb-7 align-top text-center">
                        <input type="submit" value="Submit" className="py-3 px-14 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors" />
                    </div>
                </div>
            </form>
        </main>
    )
}
