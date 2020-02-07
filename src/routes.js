import { Router } from 'express';
import cors from 'cors';
const routes = new Router();

import ArticleController from './app/controllers/ArticleController';

// middlewares
routes.use(cors());

 // articles
routes.get('/articles', ArticleController.index);
routes.post('/articles', ArticleController.store);

export default routes;
