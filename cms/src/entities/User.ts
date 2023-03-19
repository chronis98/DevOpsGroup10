export type User = {
    id: number,
    username: string
    email: string,
    created_at: Date // TODO:: chose string because ERD has VARCHAR. Check if this has to be an enum
}
