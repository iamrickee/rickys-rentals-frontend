'use client'

import Heading from '@/components/Utils/Heading'
import { save } from '@/actions/rental/rental'

export default function RentalNew() {
    return (
        <main className="container py-6">
            <Heading text="New Rental" level={1} />
            <form action={save}>
                <div className="columns-2">
                    <div className="w-full mb-7 align-top">
                        <input type="text" name="name" placeholder="Name" className="w-full py-2 px-4 text-lg" required />
                    </div>
                    <div className="w-full mb-7 align-top">
                        <select name="image" className="w-full py-2 px-4 text-lg bg-white" required>
                            <option value="">Select Image*</option>
                            <option value="bulldozer.png">Bulldozer</option>
                            <option value="crane.png">Crane</option>
                            <option value="dump-1.png">Dump 1</option>
                            <option value="dump-2.png">Dump 2</option>
                            <option value="excavator.png">Excavator</option>
                            <option value="fork-lift.png">Fork Lift</option>
                            <option value="impact-hammer.png">Impact Hammer</option>
                            <option value="mixer.png">Mixer</option>
                            <option value="roller-1.png">Roller 1</option>
                            <option value="roller-2.png">Roller 2</option>
                            <option value="tow.png">Tow</option>
                        </select>
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
