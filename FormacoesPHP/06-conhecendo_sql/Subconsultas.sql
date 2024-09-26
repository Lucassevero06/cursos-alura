SELECT nome, telefone 
FROM clientes 
WHERE id = (
  select idcliente 
  from pedidos 
  where datahorapedido = '2023-01-02 08:15:00'
);

SELECT idcliente from pedidos WHERE strftime('%m', datahorapedido) = '01';

SELECT nome
FROM clientes
WHERE id IN (
  SELECT idcliente 
  from pedidos 
  WHERE strftime('%m', datahorapedido) = '01'
);






SELECT avg(preco) from produtos 



SELECT nome, preco
FROM produtos
GROUP BY nome, preco
HAVING preco > (
  SELECT avg(preco) from produtos 
)