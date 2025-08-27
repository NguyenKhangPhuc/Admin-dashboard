

export interface UserAttributes {
    id?: string
    email: string,
    password: string,
    createdAt?: string,
}

export interface PaginationCursor {
    hasNextPage?: boolean
    hasPrevPage?: boolean
    nextPage: number | null
    prevPage: number | null
    order: string
    type: string
    search: string | undefined
}

export interface Pagination<T> {
    docs: Array<T>,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    limit: number,
    nextPage: number | null,
    page: number,
    pagingCounter: number,
    prevPage: number | null,
    totalDocs: number,
    totalPages: number,
}