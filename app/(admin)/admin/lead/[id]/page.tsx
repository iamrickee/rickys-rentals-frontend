'use client'

import Heading from '@/components/Utils/Heading'

export default function LeadView({ params }: { params: { id: number }}) {
    const headingText: string = "View Lead " + params.id
    const dtClass: string = "w-1/4 py-2 px-2 border-b-stone-300 border-b-2"
    const ddClass: string = "w-3/4 py-2 px-2 border-b-stone-300 border-b-2"

    return (
        <main className="container py-6">
            <Heading text={headingText} level={1} />
            <dl className="flex flex-wrap">
                <dt className={dtClass}>First Name</dt>
                <dd className={ddClass}>Caleb</dd>
                <dt className={dtClass}>Last Name</dt>
                <dd className={ddClass}>Williams</dd>
                <dt className={dtClass}>Email</dt>
                <dd className={ddClass}>calebwilliams@bears.com</dd>
                <dt className={dtClass}>Phone</dt>
                <dd className={ddClass}>555-555-5555</dd>
                <dt className={dtClass}>Location</dt>
                <dd className={ddClass}>Chicago, IL</dd>
                <dt className={dtClass}>Model</dt>
                <dd className={ddClass}>Dump Truck</dd>
                <dt className={dtClass}>Message</dt>
                <dd className={ddClass}>Test message<br />Line 2</dd>
            </dl>
        </main>
    )
}
