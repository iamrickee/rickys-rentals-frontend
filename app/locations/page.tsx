'use client'

import Image from 'next/image'
import Heading from '@/components/Utils/Heading'

let level: number = 1;

export default function Locations() {
    return (
        <main className="container py-6">
            <Heading text="Retail Locations" level={level} />
            <ul className="container grid grid-cols-4">
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
                <li className="my-6">
                    <Image src="/img/pin.png" alt="" height={31} width={24} className="float-left mt-2 me-5" />
                    <div className="inline-block text-md">
                        1911 Ozark Pkwy<br />
                        Algonquin, IL 60102<br />
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=1911+Ozark+Pkwy%2C+Algonquin%2C+IL+60102" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-stone-400 hocus:bg-stone-500 text-white font-semibold transition-colors">Directions</a>
                    <a href="/reserve?location=Algonquin|IL" target="_blank" className="block w-[200px] text-center mt-2 px-4 py-1 bg-yellow-500 hocus:bg-yellow-400 text-white font-semibold transition-colors">Reserve Now</a>
                </li>
            </ul>
        </main>
    );
}