import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes
import Card from 'react-bootstrap/Card';

const PanelProducto = ({ product }) => {
  return (
        <Card className="panel-producto">
            <Card.Img className="panel-imagen" variant="top" src={product.img} />
            <Card.Body>
                <Card.Title className="panel-producto-nombre">{product.name}</Card.Title>
                <Card.Text>
                    <p className="panel-producto-descripcion">{product.description}</p>
                    <p className="panel-producto-valor">
                    {LABELS.VALOR_UNIDAD} : {(product.price).toFixed(2)} €
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>

  );
};

export default PanelProducto;