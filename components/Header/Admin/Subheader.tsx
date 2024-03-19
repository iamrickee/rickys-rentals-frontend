export default function Subheader({ newSlug }: {newSlug: string}) {
    return (
        <header className="py-5 bg-stone-400">
            <div className="container overflow-hidden">
                <nav>
                    <a href={newSlug} className="inline-block py-3 px-14 mx-3 text-xl font-semibold cursor-pointer rounded-lg bg-yellow-500 text-white hocus:bg-yellow-700 transition-colors">New</a>
                </nav>
            </div>
        </header>
    )
}