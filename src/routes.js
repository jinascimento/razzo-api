import { Router } from 'express';
import cors from 'cors';
const routes = new Router();

// middlewares
routes.use(cors());

routes.get('/', (req, res, next) => {
  res.json({ ok: true});
  next;
});


export default routes;
