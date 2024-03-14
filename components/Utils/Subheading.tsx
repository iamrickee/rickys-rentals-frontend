export default function Subheading({ text, level }: { text: string, level: number }) {
    const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;
    const Classes = 'text-3xl font-serif font-bold text-stone-800 mb-6 ';
    return (
        <CustomTag className={Classes}>{text}</CustomTag>
    )
}