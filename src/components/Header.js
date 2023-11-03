import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar className="bg-body-secondary border p-4">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/hPn7DM0s/7817-removebg-preview.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
              <b className="fs-4">Search Contact</b>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
