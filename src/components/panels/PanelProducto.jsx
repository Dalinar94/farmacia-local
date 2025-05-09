import React from 'react';
import { LABELS } from '../../lib/constantes'; // Importar las constantes
import Card from 'react-bootstrap/Card';
/*<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>*/
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