import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card1 from "../components/Card1";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [contacts, setContact] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("/db.json");
    setContact(result.data.contacts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="text-center">
      <Row>
        {contacts.map((i) => (
          <Col className=" p-3" lg={3} md={4} sm={6}>
            <Card1 items={i}></Card1>
          </Col>
        ))}{" "}
      </Row>
    </Container>
  );
}

export default Home;
