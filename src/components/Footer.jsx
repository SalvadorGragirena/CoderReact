import React, { Fragment } from "react";
import { Container, } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; Your Webside 2023
          </p>
        </Container>
      </div>
    )
}
export default Footer;