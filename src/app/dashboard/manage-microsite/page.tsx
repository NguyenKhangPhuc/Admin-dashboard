'use client'
import { getMe, getMicrosite } from '@/app/services';
import { Pagination, PaginationCursor, UserAttributes } from '@/app/types';
import { MicrositeAttributes } from '@/app/types/microsite';
import Person2Icon from '@mui/icons-material/Person2';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
const Home = () => {
    ///Manage microsites page.

    ///The default cursor makes the microsites ordered by time created (Newest to lowest).
    const [cursor, setCursor] = useState<PaginationCursor>({ order: '-1', type: 'createdAt', nextPage: null, prevPage: null, search: '' });
    ///Manage the value of the search input
    const [searchInput, setSearchInput] = useState('');
    ///Manage the visibility of the filter card.
    const [openFilter, setOpenFilter] = useState(false);

    ///Filter options for mapping.
    const filterOptions = [
        {
            title: 'Filter by date created (Newest to oldest)',
            order: '-1',
            type: 'createdAt',
        },
        {
            title: 'Filter by date created (Oldest to newest)',
            order: '1',
            type: 'createdAt',
        },
        {
            title: 'Filter by number of leads (Highest to lowest)',
            order: '-1',
            type: 'leads',
        },
        {
            title: 'Filter by number of leads (Lowest to highest)',
            order: '1',
            type: 'leads',
        }
    ]

    ///Get the current information of the customer.
    const { data: me } = useQuery<UserAttributes>({
        queryKey: ['get_me'],
        queryFn: getMe
    })

    ///Get the pagination microsites, refetch everytime the cursor change.
    const { data } = useQuery<Pagination<MicrositeAttributes>>({
        queryKey: ['fetch_microsites', cursor],
        queryFn: () => getMicrosite(cursor)
    })

    const handleSearch = () => {
        ///If the user click enter, set the search field to the current search input value to make a request to backend.
        setCursor({ ...cursor, search: searchInput, nextPage: null, prevPage: null })
    }

    const handleFilter = (value: string) => {
        ///Choosing the filter option base on the title.

        ///Find the correct option base on the title
        const filterOption = filterOptions.find(option => option.title === value)!;
        ///Set the cursor values to the new option value, changing the nextPage and prevPage to null to reset the page.
        ///Search input is still in query because it does not affect.
        setCursor({ order: filterOption.order, type: filterOption.type, nextPage: null, prevPage: null, search: searchInput })
    }

    console.log(cursor)
    const microsites = data?.docs
    console.log(microsites)
    return (
        <div className="w-full scroll-smooth min-h-screen container relative">
            {openFilter && <div className='absolute w-full h-screen backdrop-blur-sm z-10 flex justify-center items-center'>
                <div className='min-w-1/3 h-1/3 bg-white rounded-xl flex flex-col p-5'>
                    <div className='font-bold flex justify-between items-center text-xl pb-5'>
                        <div>Filter</div>
                        <div className='opacity-50 hover:opacity-100 cursor-pointer' onClick={() => setOpenFilter(false)}><ClearIcon /></div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {filterOptions.map((e, index) => {
                            return (
                                <div className='flex gap-2' key={`filter ${e.title}`}>
                                    <input type="radio"
                                        id={e.title}
                                        name={`options`}
                                        value={e.title}
                                        onChange={(e) => handleFilter(e.target.value)}
                                        checked={e.order == cursor.order && e.type == cursor.type}
                                    />

                                    <label htmlFor={e.title}>{e.title}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>}
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
                        <div className="font-semibold py-2 px-5 flex justify-between">
                            <div>Microsites short list</div>
                            <div className='flex w-1/2 gap-2 items-center justify-center'>
                                <SearchIcon />
                                <input className='w-1/2 outline-none' placeholder='Searching' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch()
                                        }
                                    }} />
                            </div>
                            <div className='cursor-pointer opacity-50 hover:opacity-100 flex gap-2 items-center' onClick={() => setOpenFilter(true)}>
                                <div>Filter</div>
                                <FilterAltIcon />
                            </div>
                        </div>
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
                            disabled={data?.hasPrevPage !== undefined ? !data.hasPrevPage : true}
                            className={`${data?.hasPrevPage ? 'cursor-pointer w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative hover:bg-[#454441]' : ' w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative opacity-40'}`}
                            onClick={() => setCursor({ ...cursor, prevPage: data!.prevPage, nextPage: null })}
                        >
                            <div className='font-bold text-base'>Previous Page</div>
                        </button>
                        <button
                            disabled={data?.hasNextPage !== undefined ? !data.hasNextPage : true}
                            className={`${data?.hasNextPage ? 'cursor-pointer w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative hover:bg-[#454441]' : ' w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative opacity-40'}`}
                            onClick={() => setCursor({ ...cursor, prevPage: null, nextPage: data!.nextPage })}>
                            <div className='font-bold text-base'>Next Page</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home