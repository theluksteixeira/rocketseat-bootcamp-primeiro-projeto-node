import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ msg: 'Hello World!' }));

export default routes;
