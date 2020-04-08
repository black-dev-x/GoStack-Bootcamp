export const createUser = (user: User) => {
    return user;
};

export interface User {
    name?: string;
    email: string;
    password: string;
}