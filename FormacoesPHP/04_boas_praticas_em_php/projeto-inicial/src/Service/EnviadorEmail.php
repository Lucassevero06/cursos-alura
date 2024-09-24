<?php

namespace Alura\Leilao\Service;

use Alura\Leilao\Model\Leilao;
use function mail;

class EnviadorEmail
{
    public function notificarTerminoLeilao(Leilao $leilao)
    {
        $sucesso = mail(
            'usuario@email.com',
            'Leilão Finalizado',
            'O leilão para '.$leilao->recuperarDescricao().' foi finalizado'
        );

        if (!$sucesso) {
            throw new \DomainException('Erro ao enviar email');
        }
    }
}