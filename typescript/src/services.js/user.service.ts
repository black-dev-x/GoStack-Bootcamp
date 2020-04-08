export const createUser = (user: User) => {
    return user;
};

export interface User {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | Tech>;
}

export interface Tech {
    title: string;
    experience: number;
}