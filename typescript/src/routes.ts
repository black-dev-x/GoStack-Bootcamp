import {Response, Request} from "express";

export const helloWorld = (request: Request, response: Response) => {
    return response.json({title: 'hello World'});
};