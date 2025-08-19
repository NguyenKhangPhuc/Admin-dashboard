'use client';

import Person2Icon from '@mui/icons-material/Person2';
const Home = () => {
    return (
        <div className="w-full scroll-smooth min-h-screen container">
            <div className='w-full min-h-screen backdrop-blur-xs'>
                <div className='max-w-7xl mx-auto py-10 flex flex-col gap-10 text-white'>
                    <div className="w-full flex flex-col bg-[#262522]">
                        <div className="w-full flex gap-5  p-5">
                            <div className='w-45 h-45 p-5 bg-gray-200 rounded-lg flex items-center justify-center'>
                                <Person2Icon sx={{ color: 'black', fontSize: 80 }} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold text-white text-2xl">Paul</div>
                                    <div className="w-full flex gap-5">
                                        <div className="text-base flex font-semibold gap-1"><div className="opacity-60">Joined</div>dd:mm:yy</div>
                                        <div className="text-base flex font-semibold gap-1"><div className="opacity-60">Microsites</div>10</div>
                                    </div>
                                </div>
                                <div className='cursor-pointer w-[200px] p-3 bg-[#302e2b] flex items-center justify-center gap-3 relative hover:bg-[#454441]'>
                                    <div className='font-bold text-base'>Update Profile</div>
                                </div>
                            </div>
                        </div>
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
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-5 px-5 py-2 font-semibold border-t border-gray-500" >
                            <div className="w-full flex items-center">
                                Example 1
                            </div>
                            <div className="w-full flex items-center">www.example1.com</div>
                            <div className="w-full flex items-center">Seller</div>
                            <div className="w-full flex items-center">10</div>
                            <div className="w-full flex gap-2">
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>View</div>
                                <div className='flex flex-1 py-2 bg-[#302e2b] hover:bg-[#454441] rounded-lg items-center justify-center'>Edit</div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex justify-center  py-2 font-semibold'>
                        <div className='bg-[#302e2b] hover:bg-[#454441] rounded-lg px-15 py-2'>View More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home