import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const CartItem = ({ product }) => {
    const { restarItem, sumarItem, deleteItem } = useContext(CartContext);

    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                        {product.item.name}
                    </Col>
                    <Col>
                        Cantidad: <Button varian='danger' onClick={() => restarItem(product.item.id)}> - </Button> {product.count} <Button varian='danger' onClick={() => sumarItem(product.item.id)}> + </Button>
                    </Col>
                    <Col>
                        ${product.item.price}
                    </Col>
                    <Col>
                        <Button varian='danger' onClick={() => deleteItem(product.item.id)}>Delete</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )

}
export default CartItem;