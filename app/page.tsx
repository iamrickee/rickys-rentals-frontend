'use client'

import Image from 'next/image'
import Heading from '@/components/Utils/Heading'
import Subheading from '@/components/Utils/Subheading'

export default function Home() {
    return (
        <main className="py-6">
            <Heading text="Ricky&rsquo;s Rentals" level={1} />
            <div className="container text-center">
                <p className="text-xl max-w-[860px] mx-auto">Come and check out our rentals. We have construction vehicles for all your needs. Ricky&rsquo;s Rentals has been pretending to rent out trucks for nearly 3 years now. You can trust we will provide the finest quality fake trucks that will never let you down in your projects.</p>
                <a href="/rentals" className="inline-block mt-8 mx-4 w-[200px] py-2 text-lg font-semibold rounded-md bg-stone-800 hocus:bg-stone-200 border-stone-800 border-4 text-stone-200 hocus:text-stone-800 transition-colors">Browse Rentals</a>
                <a href="/locations" className="inline-block mt-8 mx-4 w-[200px] py-2 text-lg font-semibold rounded-md bg-stone-800 hocus:bg-stone-200 border-stone-800 border-4 text-stone-200 hocus:text-stone-800 transition-colors">Locations</a>
                <a href="/reserve" className="block mt-8 mx-auto w-[432px] py-3 text-2xl font-bold rounded-md bg-yellow-500 hocus:bg-yellow-600 border-yellow-500 border-4 hocus:border-yellow-600 text-stone-200 transition-colors">Reserve Now</a>
            </div>
        </main>
    );
}
