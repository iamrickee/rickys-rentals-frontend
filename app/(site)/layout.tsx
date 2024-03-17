import Header from "@/components/Header/Site/Header"
import Footer from "@/components/Footer/Footer"

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}