'use client'

import { MicrositeAttributes } from "@/app/types/microsite"
import dayjs from "dayjs"
import Link from "next/link"
import { useState } from "react"

const Microsite = ({ microsite }: { microsite: MicrositeAttributes }) => {
    // Microsite component
    const [openLeads, setOpenLeads] = useState(false);
    return (
        <div className='w-full flex flex-col bg-black/50' key={microsite.id}>
            <div className='w-full grid grid-rows-4 xl:grid-cols-2 grid-cols-1 gap-3 p-5'>
                <div className="w-full flex items-center gap-2">
                    Microsite name: <strong>{microsite.brand}</strong>
                </div>
                <div className="w-full h-[50px] flex items-center gap-2">Domain: <strong className="w-full break-all">{`http://${microsite.domain}/`}</strong></div>
                <div className="w-full h-[50px] flex items-center gap-2">Site type: <strong>Seller/Buyer</strong></div>
                <div className="w-full h-[50px] flex items-center gap-2">Leads: <strong>{microsite.leads?.length}</strong></div>
                <div className="w-full h-[50px] flex items-center gap-2">Created: <strong>{dayjs(microsite.createdAt).format("DD-MM-YY")}</strong></div>
                <div className="w-full h-[50px] flex items-center gap-2">Last updated: <strong>{dayjs(microsite.updatedAt).format("DD-MM-YY")}</strong></div>
                <div className="w-full h-[50px] flex  gap-2">
                    <Link href={`http://${microsite.domain}/`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-black rounded-lg items-center justify-center'>View</Link>
                    <Link href={`/dashboard/update-microsite/${microsite.id}`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-black rounded-lg items-center justify-center'>Edit</Link>
                </div>
            </div>
            {microsite.leads && microsite.leads?.length > 0 &&
                <div className='font-bold px-5 py-5  w-full text-xl flex flex-col items-center justify-center py-3 gap-5'>
                    <div>Leads</div>
                    <label className="arrow_down">
                        <input type="checkbox" onChange={() => setOpenLeads(!openLeads)} />
                        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="chevron-down"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                    </label>
                </div>}
            {microsite.leads && microsite.leads?.length > 0 && openLeads &&
                <>
                    <div className='w-full grid grid-cols-5 gap-5 p-5 font-bold bg-[#302e2c]'>
                        <div className='w-full'>First name</div>
                        <div className='w-full'>Last name</div>
                        <div className='w-full'>Age</div>
                        <div className='w-full'>Email</div>
                        <div className='w-full'>Phone number</div>
                    </div>

                    {microsite.leads?.map((lead) => {
                        return (
                            <div className='w-full grid grid-cols-5 gap-5 p-5 font-bold' key={`${lead.id}`}>
                                <div className='w-full flex items-center gap-2 break-all'>{lead.firstName}</div>
                                <div className='w-full flex items-center gap-2 break-all'>{lead.lastName}</div>
                                <div className='w-full flex items-center gap-2 break-all'>{lead.age}</div>
                                <div className='w-full flex items-center gap-2 break-all'>{lead.email}</div>
                                <div className='w-full flex items-center gap-2 break-all'>{lead.phone}</div>
                            </div>
                        )
                    })}
                </>}


        </div>
    )
}

export default Microsite