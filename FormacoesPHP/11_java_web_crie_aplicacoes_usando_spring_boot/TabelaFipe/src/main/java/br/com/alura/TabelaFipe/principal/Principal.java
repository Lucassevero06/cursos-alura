package br.com.alura.TabelaFipe.principal;

import br.com.alura.TabelaFipe.model.Dados;
import br.com.alura.TabelaFipe.model.Modelos;
import br.com.alura.TabelaFipe.model.Veiculo;
import br.com.alura.TabelaFipe.service.ConsumoApi;
import br.com.alura.TabelaFipe.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Principal {
    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();

    private final String URL_BASE = "https://parallelum.com.br/fipe/api/v1/";

    public void exibeMenu() {
        var menu = """
                *** OPÇÕES ***
                Carro
                Moto
                Caminhão
                
                Digite uma das opções para consultar
                """;

        System.out.println(menu);
        var opcao = this.leitura.nextLine();
        String endereco;
        
        if (opcao.toLowerCase().contains("carr")) {
            endereco = this.URL_BASE + "carros/marcas";
        } else if(opcao.toLowerCase().contains("moto")) {
            endereco = this.URL_BASE + "motos/marcas";
        } else if(opcao.toLowerCase().contains("cami")){
            endereco = this.URL_BASE + "caminhoes/marcas";
        } else {
            System.out.println("Opção inválida");
            return;
        }

        var json = this.consumo.obterDados(endereco);
        System.out.println(json);
        var marcas = this.conversor.obterLista(json, Dados.class);
        marcas.stream()
                .sorted(Comparator.comparing(Dados::codigo))
                .forEach(System.out::println);

        System.out.println("Informe o codigo da marca para consulta:");
        var codigoMarca = this.leitura.nextLine();

        endereco += "/" + codigoMarca + "/modelos";
        json = this.consumo.obterDados(endereco);
        var modeloLista = this.conversor.obterDados(json, Modelos.class);
        System.out.println("\nModelos dessa marca:");
        modeloLista.modelos().stream()
                .sorted(Comparator.comparing(Dados::codigo))
                .forEach(System.out::println);

        System.out.println("\nDigite um trecho do nome do carro a ser buscado");
        var nomeVeiculo = this.leitura.nextLine();

        List<Dados> modelosFiltrados = modeloLista.modelos().stream()
                .filter(m -> m.nome().toLowerCase().contains(nomeVeiculo.toLowerCase()))
                .collect(Collectors.toList());

        System.out.println("\nModelos filtrados");
        modelosFiltrados.forEach(System.out::println);

        System.out.println("Digite por favor o codigo do modelo para buscar os valores de avaliação");
        var codigoModelo = this.leitura.nextLine();
        
        endereco += "/" + codigoModelo + "/anos";
        json = this.consumo.obterDados(endereco);
        List<Dados> anos = this.conversor.obterLista(json, Dados.class);
        List<Veiculo> veiculos = new ArrayList<>();

        for (int i = 0; i < anos.size(); i++) {
            var enderecoAnos = endereco + "/" + anos.get(i).codigo();
            json = this.consumo.obterDados(enderecoAnos);
            Veiculo veiculo = this.conversor.obterDados(json, Veiculo.class);
            veiculos.add(veiculo);
        }

        System.out.println("\nTodos os veiculos filtrados com avaliações por ano: ");
        veiculos.forEach(System.out::println);

    }
}
