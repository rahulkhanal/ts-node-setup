import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from './modules/users/user.controller';
import Container from 'typedi';

const port = 3000;

useContainer(Container);
const app = createExpressServer({
    controllers: [UserController],
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 