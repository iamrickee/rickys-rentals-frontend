import Logo from '@/components/Utils/Logo'
import MainNav from '@/components/Header/Admin/MainNav'

export default function Header() {
    return (
        <header className="py-5 bg-stone-700">
            <div className="container overflow-hidden">
                <div className="md:float-left">
                    <Logo />
                </div>
                <div className="md:float-right mt-2 md:mt-1 text-center md:text-right">
                    <MainNav />
                </div>
            </div>
        </header>
    )
}