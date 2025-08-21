

export interface UserAttributes {
    id?: string
    email: string,
    password: string,
    createdAt?: string,
}

export interface PaginationCursor {
    hasNextPage?: boolean
    hasPrevPage?: boolean
    nextCursor: string | undefined
    prevCursor: string | undefined
    total?: number
}