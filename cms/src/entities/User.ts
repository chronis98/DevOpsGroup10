export type User = {
    id: number,
    username: string
    email: string,
    password?: string,
    createdAt: Date // TODO:: Discuss how we transform JSON string to Date obj
}
