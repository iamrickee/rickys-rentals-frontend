'use client'

import type { Rental } from '@/utils/rental'
import Heading from '@/components/Utils/Heading'
import Subheader from '@/components/Header/Admin/Subheader'
import Table from '@/components/Utils/Table'

const columns = [
    'Name',
    'Description',
    'ID',
]

const keys = [
    'name',
    'description',
    'id',
]

const rental: Rental = {
    name: 'Dump Truck',
    description: 'Test desc',
    id: 1,
}

const data = [rental,rental,rental,rental]

export default function Rentals() {
    return (
        <>
            <Subheader newSlug="/admin/rental" />
            <main className="py-6">
                <Heading text="Edit Rentals" level={1} />
                <Table columns={columns} keys={keys} data={data} slug="admin/rental" linkText="Edit" id="id" />
            </main>
        </>
    )
}
