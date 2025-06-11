// src/entry-server.tsx
import { renderToString } from 'react-dom/server';
import App from './App';

export async function render() {
  const html = renderToString(<App />);
  return { html };
}
