
SELECT c.nome, x.id
from clientes c
LEFT JOIN
(
  SELECT p.id, p.idcliente
  FROM pedidos p
  WHERE strftime('%m', p.datahorapedido) = '10') x 
on c.id = x.idcliente
WHERE x.idcliente is NULL












SELECT c.nome, p.id
from clientes c
full join pedidos p
on c.id = p.idcliente
WHERE p.id is NULL








