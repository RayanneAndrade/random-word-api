import { gerarPalavras } from '../service/PalavraService.js';

export const getPalavras = (req, res) => {
  const palavras = gerarPalavras(5);
  res.status(200).json(palavras);
};
