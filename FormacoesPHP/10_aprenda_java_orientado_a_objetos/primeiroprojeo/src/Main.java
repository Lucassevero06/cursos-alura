public class Main {
    public static void main(String[] args) {

        System.out.print("Bem-vindo ao Screen Match");

        System.out.println("Filme: Top Gun - Maverick");

        int anoDeLancamento = 2022;
        String nomeFilme = "Top Gun - Maverick";
        System.out.println("Ano de lancamento: " + anoDeLancamento);
        boolean incluidoNoPlano = true;

        // media calculada pelas 3 notas da jack, paulo e suelem
        double media = (9.8 + 6.3 + 8.0) / 3;
        System.out.println(media);
        String sinopse;
        sinopse = """
                Filme Top Gun
                Filme de aventura com galã dos anos 80
                Muito bom!
                Ano de Lançamento
                """ + anoDeLancamento;
        System.out.println(sinopse);

        int classificacao = (int) (media / 2); // cast
        System.out.println(classificacao);

    }
}