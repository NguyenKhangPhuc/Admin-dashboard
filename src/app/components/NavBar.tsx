'use client';
import Link from "next/link";

import { useEffect, useState } from "react";
const NavBar = () => {

    const [mounted, setMounted] = useState(false);
    const handleLogout = () => {
        window.localStorage.removeItem('userToken');

    }
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="h-screen w-40 bg-black text-white fixed flex flex-col p-4 gap-5">
            <div className="text-2xl font-bold mb-6">Dashboard</div>
            <Link href="/dashboard/manage-microsite" className="w-full flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded">

                <span>Manage</span>
            </Link>
            <Link href="/dashboard/create-microsite" className="flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded">

                <span>Create</span>
            </Link>
            <div className="flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded" onClick={() => handleLogout()}>

                <span >Logout</span>
            </div>


        </div>
    )
}

export default NavBar;