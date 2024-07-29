import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createExpressServer, useContainer } from 'routing-controllers';
import { UserController } from './modules/users/user.controller';
import Container from 'typedi';
import { connectMySQL } from './db/sql.config';
import { StudentController } from './modules/student/student.controller';

const port = 3000;

connectMySQL()

useContainer(Container);
const app = createExpressServer({
    controllers: [StudentController],
});

app.get('/', (req: Request, res: Response) => {
    res.send('Namaste, Server is working fine 😉');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 