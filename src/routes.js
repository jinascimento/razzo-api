import { Router } from 'express';
import cors from 'cors';
const routes = new Router();

import ArticleController from './app/controllers/ArticleController';

// middlewares
routes.use(cors());

 // articles
routes.get('/articles', ArticleController.index);
routes.delete('/destroy_articles', ArticleController.destroyArticles);
routes.post('/articles', ArticleController.store);
routes.put('/articles/:id', ArticleController.update);

export default routes;
