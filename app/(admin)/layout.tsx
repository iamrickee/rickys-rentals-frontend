import Header from "@/components/Header/Admin/Header"
import Footer from "@/components/Footer/Footer"

export default function AdminLayout({
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