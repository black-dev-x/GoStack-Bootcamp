import {Response, Request} from "express";
import {createUser} from "./services.js/user.service";

export const helloWorld = (request: Request, response: Response) => {
    const user = createUser({
        email: 'thiago.dev.x@gmail.com',
        password: '123456'
    });
    return response.json(user);
};