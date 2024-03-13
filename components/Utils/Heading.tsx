export default function Heading({ text, level }: { text: string, level: number }) {
    const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <CustomTag className="text-4xl font-serif font-bold text-center text-stone-800 mb-6">{text}</CustomTag>
    )
}