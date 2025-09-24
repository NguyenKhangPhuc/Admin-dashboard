'use client';
import Link from "next/link";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from "react";
import { removeTokenFromRequest } from "../services";
import { useTokenContext } from "../context/TokenContext";
const NavBar = () => {

    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { token, setToken } = useTokenContext();
    const handleLogout = () => {
        window.localStorage.removeItem('userToken');
        removeTokenFromRequest();
        setToken('');
    }
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    if (token) return (
        <div className={`${isOpen ? 'sm:sticky fixed top-0 sm:w-40 w-full h-screen bg-black text-white flex flex-col items-center  sm:p-4 gap-5 z-10 p-1' : 'p-1 sticky top-0 sm:w-40 w-10 h-screen bg-black text-white flex flex-col items-center  sm:p-4 gap-5'}`}>
            <label className="hamburger sm:hidden block">
                <input type="checkbox" onChange={() => setIsOpen(!isOpen)} />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <Link href={token ? "/dashboard/profile" : '/'} className="w-full justify-center p-3 flex gap-2 items-center hover:bg-[#302e2b] rounded bg-gray-500">
                <AccountBoxIcon />
                <span className={`${isOpen ? 'block' : 'sm:block hidden'}`}>Profile</span>
            </Link>
            <Link href={token ? "/dashboard/manage-microsite" : '/'} className="w-full justify-center p-3 flex gap-2 items-center hover:bg-[#302e2b] rounded bg-gray-500">
                <LanguageIcon />
                <span className={`${isOpen ? 'block' : 'sm:block hidden'}`}>Manage</span>
            </Link>
            <Link href={token ? '/dashboard/create-microsite' : '/'} className="w-full justify-center p-3 flex gap-2 items-center hover:bg-[#302e2b] rounded bg-gray-500">
                <AddCircleIcon />
                <span className={`${isOpen ? 'block' : 'sm:block hidden'}`}>Create</span>
            </Link>
            {token ? <Link href={'/'} className="w-full justify-center p-3 flex gap-2 items-center hover:bg-[#302e2b] rounded bg-gray-500" onClick={() => handleLogout()}>
                <LogoutIcon />
                <span className={`${isOpen ? 'block' : 'sm:block hidden'}`}> Logout</span>
            </Link> :
                <Link href={'/'} className="w-full justify-center p-3 flex gap-2 items-center hover:bg-[#302e2b] rounded bg-gray-500">
                    <LogoutIcon />
                    <span className={`${isOpen ? 'block' : 'sm:block hidden'}`}> Login</span>
                </Link>}
        </div >

    )
}

export default NavBar;