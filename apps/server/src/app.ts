import type { Express } from 'express';
import express from 'express';
import { pinoHttp } from 'pino-http';

import { logger } from './logger.js';

export function createApp(): Express {
    const app = express();

    app.use(
        pinoHttp({
            logger,
        }),
    );

    app.use(express.json());

    app.get('/api/health', (_req, res) => {
        res.json({
            ok: true,
        });
    });

    return app;
}
