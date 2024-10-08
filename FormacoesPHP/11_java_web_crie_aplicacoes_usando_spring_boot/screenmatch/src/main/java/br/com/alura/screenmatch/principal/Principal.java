package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.DadosEpisidio;
import br.com.alura.screenmatch.model.DadosSerie;
import br.com.alura.screenmatch.model.DadosTemporada;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.util.*;
import java.util.stream.Collectors;

public class Principal {
    private Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();

    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apikey=fcc475d0";

    public void exibeMenu() {
        System.out.println("Digite o nome da série: ");
        var nomeSerie = this.leitura.nextLine();
        var json = this.consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        System.out.println(dados);

		List<DadosTemporada> temporadas = new ArrayList<>();

		for (int i = 1; i <= dados.totalTemporadas() ; i++) {
			json = this.consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + "&season=" + i + API_KEY);
			DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
			temporadas.add(dadosTemporada);
		}
		temporadas.forEach(System.out::println);

        for (int i = 0; i < dados.totalTemporadas(); i++) {
            List<DadosEpisidio> episidiosTemporada = temporadas.get(i).episodios();
            for (int j = 0; j < episidiosTemporada.size(); j++) {
                System.out.println(episidiosTemporada.get(j).titulo());
            }
        }
        temporadas.forEach(t -> t.episodios().forEach(e -> System.out.println(e.titulo())));

//        List<String> nomes = Arrays.asList("Jacque", "Iasmin", "Paulo", "Rodrigo", "Nico");
//        //streams
//        nomes.stream().sorted().limit(3).filter(n -> n.startsWith("N")).map(n -> n.toUpperCase())
//                .forEach(System.out::println);

        List<DadosEpisidio> dadosEpisidios = temporadas.stream().
                flatMap(t -> t.episodios().stream())
                .collect(Collectors.toList()); //mesma função do toList(), porém pode ser mutavel
                //.toList(); // esse metodo retorna uma lista IMUTAVEL

        System.out.println("\nTop 5 episodios");
        dadosEpisidios.stream()
                .filter(e -> !e.avaliacao().equalsIgnoreCase("N/A"))
                .sorted(Comparator.comparing(DadosEpisidio::avaliacao).reversed())
                .limit(5)
                .forEach(System.out::println);
    }
}
