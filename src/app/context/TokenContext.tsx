'use client';

import { useContext, useState, createContext, useEffect } from "react";

interface TokenContextAttribute {
    token: string,
    setToken: (token: string) => void
}

const TokenContext = createContext<TokenContextAttribute | undefined>(undefined)

export const TokenContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string>(typeof window !== undefined ? localStorage.getItem('userToken') || '' : '')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext = () => {
    const context = useContext(TokenContext)
    if (!context) {
        throw new Error('Context is not ready')
    }
    return context
}