'use client'

import type { Location } from '@/utils/location'
import Heading from '@/components/Utils/Heading'
import Subheader from '@/components/Header/Admin/Subheader'
import Table from '@/components/Utils/Table'

const columns = [
    'Address',
    'City',
    'State',
    'Zip',
    'ID',
]

const keys = [
    'address',
    'city',
    'state',
    'zip',
    'id',
]

const location: Location = {
    address: '1911 Ozark Pkwy',
    city: 'Algonquin',
    state: 'IL',
    zip: '60102',
    id: 1,
}

const data = [location,location,location,location]

export default function Locations() {
    return (
        <>
            <Subheader newSlug="/admin/location" />
            <main className="py-6">
                <Heading text="Edit Locations" level={1} />
                <Table columns={columns} keys={keys} data={data} slug="admin/location" linkText="Edit" id="id" />
            </main>
        </>
    )
}
