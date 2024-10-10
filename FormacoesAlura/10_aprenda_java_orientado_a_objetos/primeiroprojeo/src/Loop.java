import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Diga sua avalaição para o filme");
        double mediaAvaliacao = 0;
        double nota = 0;

        for (int i = 0; i < 3; i++) {
            System.out.println("Digite uma nota para o filme:");
            nota = leitura.nextDouble();
            mediaAvaliacao += nota;
        }

        System.out.println("Media de avalaicoes: " + mediaAvaliacao/3);
    }
}
