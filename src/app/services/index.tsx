import axios from "axios"
import { UserAttributes } from "../types";
import { MicrositeAttributes } from "../types/microsite";
let userToken: string | null;

const apiClient = axios.create({
    baseURL: 'http://localhost:3005/api'
})
if (typeof window !== 'undefined') {
    userToken = localStorage.getItem('userToken')
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
}
export const setTokenToRequest = () => {
    if (typeof window !== 'undefined') {
        userToken = localStorage.getItem('userToken')
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
    }
}

export const removeTokenFromRequest = () => {
    if (typeof window !== 'undefined') {
        apiClient.defaults.headers.common['Authorization'] = ''
    }
}




export const userLogin = async (credentials: UserAttributes) => {
    try {
        const response = await apiClient.post('/user/login', credentials)
        return response.data
    } catch (error) {
        throw new Error('Login not successfully')
    }
}

export const userSignup = async (newUser: UserAttributes) => {
    try {
        const response = await apiClient.post('/user/signup', newUser)
        return response.data
    } catch (error) {
        throw new Error('Sign up not successfully')
    }
}

export const createMicrosite = async (newMicrosite: MicrositeAttributes) => {
    try {
        const response = await apiClient.post('/microsite', newMicrosite)
        return response.data
    } catch (error) {
        throw new Error('Failed to create microsite')
    }
}

export const getMicrosite = async () => {
    try {
        const response = await apiClient.get('/microsite')
        return response.data
    } catch (error) {
        throw new Error('Failed to get microsites')
    }
}


export const getMe = async () => {
    try {
        const response = await apiClient.get('/user/me');
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch user data')
    }
}

export const getSingleMicrosite = async (micrositeId: string) => {
    try {
        const response = await apiClient.get(`/microsite/${micrositeId}`);
        return response.data
    } catch (error) {
        throw new Error('Failed to get single microsite')
    }
}

export const updateMicrosite = async ({ micrositeId, updatedMicrosite }: { micrositeId: string, updatedMicrosite: MicrositeAttributes }) => {
    try {
        const response = await apiClient.put(`/microsite/${micrositeId}`, updatedMicrosite)
        return response.data
    } catch (error) {
        throw new Error('Failed to update microsite')
    }
}