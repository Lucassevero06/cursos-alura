SELECT * from clientes;
select * from pedidos;

SELECT c.nome, p.id, p.datahorapedido
from clientes c
inner join pedidos p
on c.id = p.idcliente


SELECT*FROM produtos

SELECT pr.nome, x.idproduto, x.idpedido
from 
	(
    SELECT ip.idpedido, ip.idproduto
    from pedidos p 
    join itenspedidos ip
    on p.id = ip.idpedido
    WHERE strftime('%m', p.datahorapedido) = '10') x
RIGHT join produtos pr
on pr.id = x.idproduto