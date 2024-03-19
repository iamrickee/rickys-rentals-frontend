'use client'

import type { Lead } from '@/utils/lead'
import Heading from '@/components/Utils/Heading'
import Table from '@/components/Utils/Table'

const columns = [
    'Date',
    'First Name',
    'Last Name',
    'Email',
    'Location',
    'Model',
    'ID',
]

const keys = [
    'date',
    'firstName',
    'lastName',
    'email',
    'location',
    'model',
    'id',
]

const lead: Lead = {
    date: '02/14/2024 06:33:54',
    firstName: 'Mark',
    lastName: 'Smithson',
    email: 'mark.smith877@gmail.com',
    phone: '555-555-5555',
    location: 'Cary, IL',
    model: 'Dump Truck',
    message: 'test message',
    id: 1,
}

const data = [lead,lead,lead,lead]

export default function Leads() {
    return (
        <main className="py-6">
            <Heading text="View Leads" level={1} />
            <Table columns={columns} keys={keys} data={data} slug="admin/lead" linkText="View" id="id" />
        </main>
    )
}
