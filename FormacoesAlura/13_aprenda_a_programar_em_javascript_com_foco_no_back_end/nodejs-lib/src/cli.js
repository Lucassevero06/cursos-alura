import fs from 'fs';
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3]

fs.readFile(link,'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro;
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    } catch (erro) {
        console.log(trataErros(erro))
    }
});

// //função assincrona (await)
// async function criaESalvaArquivo(listaPalavras, endreco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//         await fs.promises.writeFile(arquivoNovo, textoPalavras);
//         console.log('Arquivo criado com sucesso!');
//     } catch (erro) {
//         throw erro;
//     }
// }

//função assincrona (then)
function criaESalvaArquivo(listaPalavras, endreco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);
    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            //processamento feito com o resultado da promessa
            console.log('Arquivo criado com sucesso!');
        }).catch((erro) => {
            //captura erros
            throw erro;
        }).finally(() => {
            //executado sempre
            console.log('Processamento concluído!');
        })
}
