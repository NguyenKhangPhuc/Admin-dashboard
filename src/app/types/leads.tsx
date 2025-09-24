import { MicrositeAttributes } from "./microsite";

export interface LeadAttributes {
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    phone: string,
    email: string,
    microsite: MicrositeAttributes
}


