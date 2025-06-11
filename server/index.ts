// server/index.ts
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await (await import('vite')).createServer({
    server: { middlewareMode: true },
    root: process.cwd(),
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { html } = await render();

      const finalHtml = template.replace(`<!--ssr-outlet-->`, html);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end('Internal Server Error');
    }
  });

  app.listen(3000, () => {
    console.log('SSR server running at http://localhost:3000');
  });
}

createServer();
