package br.com.alura.minhasmusicas.modelos;

public class Audio {
    private String titulo;
    private int totalReproducoes;
    private int totalCurtidas;
    private int classificacao;

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getTotalReproducoes() {
        return this.totalReproducoes;
    }

    public int getTotalCurtidas() {
        return this.totalCurtidas;
    }

    public int getClassificacao() {
        return this.classificacao;
    }

    public void curte() {
        this.totalCurtidas++;
    }

    public void reproduz() {
        this.totalReproducoes++;
    }
}
