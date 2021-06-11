import express from 'express';
import routes from './routes';
import 'reflect-metadata';
import './database';
const venom = require('venom-bot');

const app = express();

app.use(express.json());
app.use(routes);

// venom.create().then((client) => start(client));

// function start(client) {
// }

app.listen(3333, () => {
  console.log('⏩ Server started on 3333!');
});
