'use client';
import Link from "next/link";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from "react";
import { removeTokenFromRequest } from "../services";
const NavBar = () => {

    const [mounted, setMounted] = useState(false);
    const handleLogout = () => {
        window.localStorage.removeItem('userToken');
        removeTokenFromRequest()
    }
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="h-screen w-40 bg-black text-white fixed flex flex-col p-4 gap-5">
            <div className="text-2xl font-bold mb-6">Dashboard</div>
            <Link href="/dashboard/profile" className="w-full flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded">
                <AccountBoxIcon />
                <span>Profile</span>
            </Link>
            <Link href="/dashboard/manage-microsite" className="w-full flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded">
                <LanguageIcon />
                <span>Manage</span>
            </Link>
            <Link href="/dashboard/create-microsite" className="flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded">
                <AddCircleIcon />
                <span>Create</span>
            </Link>
            <Link href={'/'} className="flex items-center space-x-2 hover:bg-[#302e2b] p-2 rounded" onClick={() => handleLogout()}>
                <LogoutIcon />
                <span > Logout</span>
            </Link>


        </div >
    )
}

export default NavBar;