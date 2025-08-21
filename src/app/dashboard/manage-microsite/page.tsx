'use client'
import { getMe, getMicrosite } from '@/app/services';
import { PaginationCursor, UserAttributes } from '@/app/types';
import { MicrositeAttributes } from '@/app/types/microsite';
import Person2Icon from '@mui/icons-material/Person2';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
const Home = () => {
    const [cursor, setCursor] = useState<PaginationCursor>()
    const { data: me } = useQuery<UserAttributes>({
        queryKey: ['get_me'],
        queryFn: getMe
    })
    const { data } = useQuery<{ response: Array<MicrositeAttributes>, cursor: PaginationCursor }>({
        queryKey: ['fetch_microsites', cursor],
        queryFn: () => getMicrosite({ order: '-1', nextCursor: cursor?.nextCursor, prevCursor: cursor?.prevCursor })
    })

    console.log(data)
    const microsites = data?.response
    const receivedCursor = data?.cursor
    console.log(cursor)
    return (
        <div className="w-full scroll-smooth min-h-screen container">
            <div className="w-full min-h-screen p-10 backdrop-blur-xs">
                <div className="'w-full mx-auto flex flex-col border border-gray-500 text-white">
                    <div className="w-full flex gap-2 items-center border-b border-gray-500 font-bold p-5">
                        <Person2Icon />
                        <div> {me?.email}</div>
                    </div>
                    <div className="w-full flex justify-center items-center border-b border-gray-500 font-bold p-5 text-3xl">
                        Manage Microsites
                    </div>
                    <div className="w-full flex flex-col backdrop-blur-sm bg-[#262522]" >
                        <div className="font-semibold py-2 px-5">Microsites short list</div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold bg-[#454441]">
                            <div className="w-full">
                                Microsite
                            </div>
                            <div className="w-full">Domain</div>
                            <div className="w-full">Template</div>
                            <div className="w-full">Leads</div>
                            <div className="w-full">Action</div>
                        </div>
                        {microsites?.map((microsite) => {
                            return (
                                <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" key={`microsite ${microsite.id}`}>
                                    <div className="w-full flex items-center">
                                        {microsite.brand}
                                    </div>
                                    <div className="w-full flex items-center">{`http://localhost:3005/${microsite.slug}`}</div>
                                    <div className="w-full flex items-center">Seller/Buyer</div>
                                    <div className="w-full flex items-center">{microsite.leads?.length}</div>
                                    <div className="w-full flex gap-2">
                                        <Link href={`http://localhost:3005/${microsite.slug}`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</Link>
                                        <Link href={`/dashboard/update-microsite/${microsite.id}`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full flex justify-center items-center gap-5 p-5'>
                        <button
                            disabled={receivedCursor?.hasPrevPage !== undefined ? !receivedCursor.hasPrevPage : true}
                            className={`${receivedCursor?.hasPrevPage ? 'cursor-pointer w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative hover:bg-[#454441]' : ' w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative opacity-40'}`}
                            onClick={() => setCursor({ prevCursor: receivedCursor?.prevCursor, nextCursor: undefined })}
                        >
                            <div className='font-bold text-base'>Previous Page</div>
                        </button>
                        <button
                            disabled={receivedCursor?.hasNextPage !== undefined ? !receivedCursor.hasNextPage : true}
                            className={`${receivedCursor?.hasNextPage ? 'cursor-pointer w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative hover:bg-[#454441]' : ' w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative opacity-40'}`}
                            onClick={() => setCursor({ nextCursor: receivedCursor?.nextCursor, prevCursor: undefined })}>
                            <div className='font-bold text-base'>Next Page</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home