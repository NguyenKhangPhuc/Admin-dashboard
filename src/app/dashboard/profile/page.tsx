'use client';

import { getMe, getMicrosite } from '@/app/services';
import { Pagination, PaginationCursor, UserAttributes } from '@/app/types';
import { MicrositeAttributes } from '@/app/types/microsite';
import Person2Icon from '@mui/icons-material/Person2';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import { useTokenContext } from '@/app/context/TokenContext';
import { useRouter } from 'next/navigation';
const Home = () => {
    ///Manage the profile page.
    const { token, setToken } = useTokenContext();
    const router = useRouter();
    ///Get the information of the current user.
    const { data: me } = useQuery<UserAttributes>({
        queryKey: ['get_me'],
        queryFn: getMe
    })
    useEffect(() => {
        if (!token) {
            router.push('/')
        }
    }, [token])
    ///The default cursor is order by times (Newest to oldest)
    const [cursor, setCursor] = useState<PaginationCursor>({ order: '-1', type: 'createdAt', nextPage: null, prevPage: null, search: '' })

    ///Get the Microsites.
    const { data } = useQuery<Pagination<MicrositeAttributes>>({
        queryKey: ['fetch_microsites', cursor],
        queryFn: () => getMicrosite(cursor)
    })

    const microsites = data?.docs
    return (
        <div className='w-full min-h-screen z-0'>
            <div className='max-w-screen mx-auto py-10 flex flex-col gap-10 text-white'>

                <div className='w-full flex gap-5 p-5 bg-[#262522]'>
                    <div className='sm:w-45 sm:h-45 w-35 h-35 p-5 bg-gray-200 rounded-lg flex items-center justify-center'>
                        <Person2Icon sx={{ color: 'black', fontSize: 80 }} />
                    </div>
                    <div className='flex flex-col font-bold'>
                        <div className='break-all'>{me?.email}</div>
                        <div className='break-all'>Join: {dayjs(me?.createdAt).format("DD-MM-YY")}</div>
                        <div className='break-all'>Microsites: {data?.totalDocs}</div>
                    </div>
                </div>
                <div className="w-full flex flex-col backdrop-blur-sm bg-[#262522]" >
                    <div className="font-semibold py-2 px-5 w-full bg-[#454441]">Microsites short list</div>
                    <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5 mt-2'>
                        {microsites?.map((microsite) => {
                            return (
                                <div className='w-full grid grid-rows-4 lg:grid-cols-2 grid-cols-1 gap-3 bg-black/50 p-5' key={microsite.id}>
                                    <div className="w-full flex items-center gap-2">
                                        Microsite name: <strong>{microsite.brand}</strong>
                                    </div>
                                    <div className="w-full flex items-center gap-2">Domain: <strong className='break-all'>{`http://${microsite.domain}/`}</strong></div>
                                    <div className="w-full flex items-center gap-2">Leads: <strong>{microsite.leads?.length}</strong></div>
                                    <div className="w-full flex items-center gap-2">Created: <strong>{dayjs(microsite.createdAt).format("DD-MM-YY")}</strong></div>
                                    <div className="w-full flex items-center gap-2">Last updated: <strong>{dayjs(microsite.updatedAt).format("DD-MM-YY")}</strong></div>
                                    <div className="w-full flex gap-2">
                                        <Link href={`http://${microsite.domain}/`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-black rounded-lg items-center justify-center'>View</Link>
                                        <Link href={`/dashboard/update-microsite/${microsite.id}`} className='flex flex-1 py-2 bg-[#302e2b] hover:bg-black rounded-lg items-center justify-center'>Edit</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full flex justify-center  py-2 font-semibold'>
                    <Link href={`/dashboard/manage-microsite`} className='bg-[#302e2b] hover:bg-[#454441] rounded-lg px-15 py-2'>View More</Link>
                </div>
            </div>
        </div>
    )
}

export default Home