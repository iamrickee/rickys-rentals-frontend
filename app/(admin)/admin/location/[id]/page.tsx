'use client'

import Heading from '@/components/Utils/Heading'
import StateOptions from '@/components/Utils/StateOptions'

export default function LocationEdit({ params }: { params: { id: number }}) {
    const headingText: string = "Edit Location " + params.id
    return (
        <main className="container py-6">
            <Heading text={headingText} level={1} />
            <form action="/admin/location/edit">
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="address" placeholder="Address" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                <div className="columns-1 sm:columns-3">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="city" placeholder="City" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <select name="state" className="w-full h-[45px] px-4 text-lg bg-white" required>
                            <StateOptions />
                        </select>
                    </div>
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="zip" placeholder="Zip" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top text-center">
                        <a href="/admin/locations" className="py-3 px-14 mx-3 text-xl font-semibold cursor-pointer rounded-lg bg-stone-500 text-white hocus:bg-stone-700 transition-colors">Close</a>
                        <input type="submit" value="Save" className="py-3 px-14 mx-3 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors" />
                    </div>
                </div>
            </form>
        </main>
    )
}
