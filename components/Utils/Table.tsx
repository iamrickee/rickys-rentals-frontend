let headCN: string = "text-left py-2 px-2 bg-yellow-500"
let bodyCN: string = "text-left py-1 px-2 bg-stone-100 group-even:bg-stone-300"

export default function Table({ columns, keys, data, slug, linkText, id = 'id' }: { columns: Array<string>, keys: Array<string>, data: Array<any>, slug: string, linkText: string, id: string }) {
    const headings = columns.map((column) => 
        <th className={headCN}>{column}</th>
    )
    let keyData: Array<React.JSX.Element[]> = [];
    data.forEach(function (datum) {
        let keyDatum = keys.map((key) =>
            <td className={bodyCN}>{datum[key]}</td>
        )
        let link: string = "/" + slug + "/" + datum[id]
        keyDatum.unshift(<td className={bodyCN}><a href={link} className="hocus:underline text-yellow-700 hocus:text-yellow-600 font-bold">{linkText}</a></td>)
        let trash: string = "/" + slug + "/" + datum[id] + '/delete'
        keyDatum.push(<td className={bodyCN}><a href={trash} className="hocus:underline text-red-700 hocus:text-yellow-600 font-bold">Delete</a></td>)
        keyData.push(keyDatum)
    })
    const values = keyData.map((keyDatum) =>
        <tr className="group">
            {keyDatum}
        </tr>
    )
    return (
        <table className="container border-yellow-500 border-2">
            <thead>
                <tr>
                    <th className={headCN}></th>
                    {headings}
                    <th className={headCN}></th>
                </tr>
            </thead>
            <tbody>
                {values}
            </tbody>
        </table>
    )
}