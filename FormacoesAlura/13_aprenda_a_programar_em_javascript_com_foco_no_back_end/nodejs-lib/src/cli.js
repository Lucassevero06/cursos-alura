import fs from 'fs';
import path from "path"; //gerencimento de arquivos absolutos e relativos
import chalk from 'chalk'; //cores no terminal
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
//biblioteca para trabalhar com linhas de comando no terminal
import { Command } from 'commander';

const program = new Command();
program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(chalk.red("Erro: favor inserir camingo de origem e destino"));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado com sucesso'))
        } catch (erro) {
            console.log(chalk.red('Ocorreu um erro no processamento'), erro)
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto,'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch (erro) {
            console.log(trataErros(erro))
        }
    })
}


//função assincrona (await)
async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado com sucesso!');
    } catch (erro) {
        throw erro;
    }
}

// //função assincrona (then)
// function criaESalvaArquivo(listaPalavras, endreco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//         .then(() => {
//             //processamento feito com o resultado da promessa
//             console.log('Arquivo criado com sucesso!');
//         }).catch((erro) => {
//             //captura erros
//             throw erro;
//         }).finally(() => {
//             //executado sempre
//             console.log('Processamento concluído!');
//         })
// }
