<?php

require_once 'vendor/autoload.php';

$databasePath = __DIR__ . '/banco.sqlite';
$pdo = new PDO("sqlite:$databasePath");

$statement = $pdo->query('SELECT * FROM students');
$studentDataList = $statement->fetchAll(PDO::FETCH_ASSOC); // retorna um array de objetos Student com todos os seus dados
$studentList = [];

foreach ($studentDataList as $studentData) {
    $studentList[] = new \Alura\Pdo\Domain\Model\Student(
        $studentData['id'],
        $studentData['name'],
        new \DateTimeImmutable($studentData['birthdate'])
    );
}
var_dump($studentList);
