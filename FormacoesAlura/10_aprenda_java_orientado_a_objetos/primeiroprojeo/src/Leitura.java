import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite o seu filme favorito");
        String filme = leitura.nextLine();

        System.out.println("Qual o ano de Lançamento");
        int anoDeLancamento = leitura.nextInt();

        System.out.println("Diga sua avalaição para o filme");
        double avaliacao = leitura.nextDouble();



        leitura.close();
    }
}
