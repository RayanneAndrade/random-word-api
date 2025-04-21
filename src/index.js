import express from 'express';
import palavraRoutes from './routes/PalavraRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/palavras', palavraRoutes);

app.listen(port, () => {
  console.log(`API de palavras rodando em http://localhost:${port}`);
});
