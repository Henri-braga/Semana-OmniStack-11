import { Router } from 'express';

const routes = new Router();

routes.get('/users', (req, res) => {
    res.json({ ok: true });
});

export default routes;
