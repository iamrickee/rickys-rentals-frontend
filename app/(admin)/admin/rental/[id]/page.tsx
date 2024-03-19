'use client'

import Heading from '@/components/Utils/Heading'

export default function RentalEdit({ params }: { params: { id: number }}) {
    const headingText: string = "Edit Rental " + params.id
    return (
        <main className="container py-6">
            <Heading text={headingText} level={1} />
            <form action="/admin/rental/edit">
                <div className="columns-1">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="name" placeholder="Name" className="w-full py-2 px-4 text-lg" required />
                    </div>
                </div>
                <div className="sm:columns-1">
                    <div className="w-full mb-7 align-top">
                        <textarea name="description" placeholder="Description" className="w-full py-2 px-4 text-lg" rows={6}></textarea>
                    </div>
                    <div className="w-full mb-7 align-top text-center">
                        <a href="/admin/rentals" className="py-3 px-14 mx-3 text-xl font-semibold cursor-pointer rounded-lg bg-stone-500 text-white hocus:bg-stone-700 transition-colors">Close</a>
                        <input type="submit" value="Save" className="py-3 px-14 mx-3 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors" />
                    </div>
                </div>
            </form>
        </main>
    )
}
