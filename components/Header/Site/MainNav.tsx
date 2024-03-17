export default function MainNav() {
    return (
        <nav>
            <a href="/rentals" className="text-xl text-white font-semibold me-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100">Browse Rentals</a>
            <a href="/locations" className="text-xl text-white font-semibold mx-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100">Locations</a>
            <a href="/reserve" className="text-xl text-white md:text-stone-700 hocus:text-yellow-100 font-semibold mx-3 md:ms-5 px-3 py-2 inline-block hover:underline underline-offset-4 md:hocus:no-underline md:hover:underline-offset-0 border-0 md:border-yellow-100 md:border-2 md:rounded-lg md:bg-yellow-100 md:hocus:bg-stone-700 transition-colors">Reserve Now</a>
        </nav>
    )
}
