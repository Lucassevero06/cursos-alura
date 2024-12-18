<?php

namespace Alura\Solid\Service;

use Alura\Solid\Model\Assistivel;
use Alura\Solid\Model\Pontuavel;

class Assistidor
{
    public function assistir(Assistivel $conteudo)
    {
        $conteudo->assistir();
    }
}
