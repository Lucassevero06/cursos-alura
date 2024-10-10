<?php

require_once 'vendor/autoload.php';

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new PDO("sqlite:$databasePath");

$student = new \Alura\Pdo\Domain\Model\Student(
    null,
    'Lucas Gabriel',
    new \DateTimeImmutable('2006-03-31')
);

$sqlInsert = "INSERT INTO students (name, birth_date) VALUES ('{$student->name()}', '{$student->birthDate()->format('Y-m-d')}');";

var_dump($pdo->exec($sqlInsert));