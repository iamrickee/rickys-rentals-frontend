import { logout } from '@/actions/auth/auth'

export default function MainNav() {
    return (
        <form action={logout} method="POST">
            <nav>
                <a href="/admin/leads" className="text-xl text-white font-semibold mx-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100">Leads</a>
                <a href="/admin/rentals" className="text-xl text-white font-semibold me-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100">Rentals</a>
                <a href="/admin/locations" className="text-xl text-white font-semibold mx-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100">Locations</a>
                <input type="submit" value="Logout" className="text-xl text-white font-semibold mx-3 px-3 py-2 inline-block hover:underline underline-offset-4 hocus:text-yellow-100 cursor-pointer" />
            </nav>
        </form>
    )
}
