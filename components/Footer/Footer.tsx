let date: number = (new Date()).getFullYear();

export default function Footer() {
    return (
        <footer className="py-2 bg-stone-800 text-center text-white">
            <p>&copy; {date} Richard Goldman, All Rights Reserved</p>
        </footer>
    )
}