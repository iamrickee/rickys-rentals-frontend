'use client'

import Image from 'next/image'
import Heading from '@/components/Utils/Heading'
import Subheading from '@/components/Utils/Subheading'

export default function Rentals() {
  return (
    <main className="py-6">
        <Heading text="Available Rentals" level={1} />
        <div className="flex w-full odd:flex-row-reverse odd:text-left even:text-right even:bg-stone-400">
            <div className="w-1/12"></div>
            <div className="w-1/4 py-12">
                <Image src="/img/dump-1.png" alt="Dump Truck" height={150} width={308} />
            </div>
            <div className="w-7/12 py-12">
                <div className="px-10">
                    <Subheading text="Haul Dump Truck" level={2} />
                    <p className="text-lg">Haul dump trucks can help with heavy duty work.</p>
                    <a href="/reserve?model=haul" className="inline-block font-semibold mt-6 px-10 py-3 hocus:text-yellow-100 hocus:bg-stone-800 border-4 border-stone-800 rounded-lg text-xl transition-colors">Reserve Now</a>
                </div>
            </div>
            <div className="w-1/12"></div>
        </div>
        <div className="flex w-full odd:flex-row-reverse odd:text-left even:text-right even:bg-stone-400">
            <div className="w-1/12"></div>
            <div className="w-1/4 py-12">
                <Image src="/img/dump-1.png" alt="Dump Truck" height={150} width={308} />
            </div>
            <div className="w-7/12 py-12">
                <div className="px-10">
                    <Subheading text="Haul Dump Truck" level={2} />
                    <p>Haul dump trucks can help with heavy duty work.</p>
                </div>
            </div>
            <div className="w-1/12"></div>
        </div>
        <small className="container block text-right"><a href='https://pngtree.com/freepng/set-of-construction-equipment-in-yellow-special-machines-for-the-building-work_4843143.html' target="_blank">png image from pngtree.com/</a></small>
    </main>
  );
}
