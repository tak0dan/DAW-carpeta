use jardineria;

DROP TRIGGER tr_dp_sctualizar_stock;


DELIMITER //



CREATE TRIGGER tr_dp_sctualizar_stock
AFTER INSERT ON DetallePedidos
FOR EACH ROW
BEGIN
	Update Productos set CantidadEnStock = CantidadEnStock - NEW.cantidad;
END //

// DELIMITER ;

SELECT CantidadEnStock FROM Productos WHERE CodigoProducto='11679';

INSERT INTO DetallePedidos (CodigoPedido, CodigoProducto, Cantidad, PrecioUnidad,
NumeroLinea)
VALUES(1, '11679', 2, 7, 6);