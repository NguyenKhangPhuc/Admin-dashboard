import axios from "axios"
import { UserAttributes } from "../types";
import { MicrositeAttributes } from "../types/microsite";
let userToken: string | null;

const apiClient = axios.create({
    baseURL: '/api'
})

///Whenever the app reload, check if there is a token stored in local storage, if yes, attach it to each request to backend.
if (typeof window !== 'undefined') {
    userToken = localStorage.getItem('userToken')
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
}

export const setTokenToRequest = () => {
    ///Function to set the token to each request to backend.
    if (typeof window !== 'undefined') {
        userToken = localStorage.getItem('userToken')
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
    }
}

export const removeTokenFromRequest = () => {
    ///Function to remove token from each request to backend.
    if (typeof window !== 'undefined') {
        apiClient.defaults.headers.common['Authorization'] = ''
    }
}




export const userLogin = async (credentials: UserAttributes) => {
    ///Login service
    try {
        const response = await apiClient.post('/user/login', credentials)
        return response.data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.error);
        }
    }
}

export const userSignup = async (newUser: UserAttributes) => {
    ///Sign up service
    try {
        const response = await apiClient.post('/user/signup', newUser)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.error);
        }
    }
}

export const createMicrosite = async (newMicrosite: MicrositeAttributes) => {
    ///Create microsite service
    try {
        const response = await apiClient.post('/microsite', newMicrosite)
        return response.data
    } catch (error) {
        throw new Error('Failed to create microsite')
    }
}

export const getMicrosite = async ({ order, nextPage, prevPage, type, search }: { order: string, nextPage: number | null, prevPage: number | null, type: string, search: string | undefined }) => {
    ///Get microsites with pagination queries and certain limitations.
    try {
        const response = await apiClient.get(`/microsite?limit=5${order ? `&order=${order}` : ''}${nextPage ? `&nextPage=${nextPage}` : ''}${prevPage ? `&prevPage=${prevPage}` : ''}${type ? `&type=${type}` : ''}${search && search.length > 0 ? `&search=${search}` : ''}`);
        return response.data
    } catch (error) {
        throw new Error('Failed to get microsites')
    }
}


export const getMe = async () => {
    ///Get the current user who is logged in.
    try {
        const response = await apiClient.get('/user/me');
        return response.data
    } catch (error) {
        throw new Error('Failed to fetch user data')
    }
}

export const getSingleMicrosite = async (micrositeId: string) => {
    ///Get single microsite based on its Id.
    try {
        const response = await apiClient.get(`/microsite/${micrositeId}`);
        return response.data
    } catch (error) {
        throw new Error('Failed to get single microsite')
    }
}

export const updateMicrosite = async ({ micrositeId, updatedMicrosite }: { micrositeId: string, updatedMicrosite: MicrositeAttributes }) => {
    ///Update microsite base on its id.
    try {
        const response = await apiClient.put(`/microsite/${micrositeId}`, updatedMicrosite)
        return response.data
    } catch (error) {
        throw new Error('Failed to update microsite')
    }
}