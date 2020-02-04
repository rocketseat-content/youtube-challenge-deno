import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes.js';

import './database.js';

const app = new Application();

app.use(router.routes());

app.listen('localhost:3333');
console.log('Listening on http://localhost:3333');
