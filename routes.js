import { Router } from 'https://deno.land/x/oak/mod.ts';

import UserController from './controllers/UserController.js';

const router = new Router();

router
  .get('/users', UserController.index)
  .get('/users/:id', UserController.show)
  .post('/users', UserController.store)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete);

export default router;
