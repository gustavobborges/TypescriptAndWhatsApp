import { Router } from 'express';

import clientsRouter from './client.routes';
import accountRouter from './account.routes';
import groupRouter from './group.routes';
import messageRouter from './message.routes';

const routes = Router();

routes.use('/client', clientsRouter);
routes.use('/account', accountRouter);
routes.use('/group', groupRouter);
routes.use('/message', messageRouter);

export default routes;