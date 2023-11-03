import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Card1({ items }) {
  return (
    <div>
      <Link to={`/SingleView/${items.name}`} style={{textDecoration:'none'}}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={items.profile} />
          <Card.Body>
            <Card.Title>{items.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Card1;
