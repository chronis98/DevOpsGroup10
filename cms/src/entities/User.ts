export type User = {
    id: number,
    email: string,
    type: string // TODO:: chose string because ERD has VARCHAR. Check if this has to be an enum
}
