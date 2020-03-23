import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import routes from './routes/routes';

class App {
    constructor() {
        this.server = express();

        this.routes();
        this.midlewares();
    }

    midlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
