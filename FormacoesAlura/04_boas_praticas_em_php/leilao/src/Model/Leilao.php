<?php

namespace Alura\Leilao\Model;

use function array_key_last;
use function array_reduce;
use function count;

class Leilao
{
    /** @var Lance[] */
    private $lances;
    /** @var string */
    private $descricao;
    private $finalizado;

    public function __construct(string $descricao)
    {
        $this->descricao = $descricao;
        $this->lances = [];
        $this->finalizado = false;
    }

    public function recebeLance(Lance $lance)
    {
        if (!empty($this->lances) && $this->ehDoUltimoUsuario($lance)) {
            throw new \DomainException('Não pode propor 2 lances consecutivos');
        }

        $totalLancesUsuario = $this
            ->quantidadeLancesPorUsuario($lance->getUsuario());

        if ($totalLancesUsuario >= 5) {
            throw new \DomainException('Usuário não pode propor mais que 5 lances por leilão');
        }

        $this->lances[] = $lance;
    }

    /**
     * @return Lance[]
     */
    public function getLances(): array
    {
        return $this->lances;
    }

    public function finaliza()
    {
        $this->finalizado = true;
    }

    public function estaFinalizado(): bool
    {
        return $this->finalizado;
    }

    /**
     * @param Lance $lance
     * @return bool
     */
    private function ehDoUltimoUsuario(Lance $lance): bool
    {
        $ultimoLance = $this->lances[array_key_last($this->lances)];
        return $lance->getUsuario() == $ultimoLance->getUsuario();
    }

    /**
     * @param Usuario $usuario
     * @return int
     */
    private function quantidadeLancesPorUsuario(Usuario $usuario): int
    {
        $totalLancesUsuario = array_reduce(
            $this->lances,
            function (int $totalAcumulado, Lance $lanceAtual) use ($usuario) {
                if ($lanceAtual->getUsuario() == $usuario) {
                    return $totalAcumulado + 1;
                }

                return $totalAcumulado;
            },
            0
        );
        return $totalLancesUsuario;
    }

}
