import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


const CartItem = ({ product }) => {

    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                        {product.item.name}
                    </Col>
                    <Col>
                        Cantidad: {product.count}
                    </Col>
                    <Col>
                        Precio: {product.item.price}
                    </Col>
                </Row>
            </Container>
        </Card>
    )

}
export default CartItem;