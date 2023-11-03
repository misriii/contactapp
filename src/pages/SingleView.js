import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

function SingleView(contacts) {
  const [AllData, setData] = useState([]);

  const { name } = useParams();

  const fetchAllData = async () => {
    const result = await axios.get("/db.json");
    setData(result.data.contacts);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const singleData = AllData.find((i) => i.name == name);

  return (
    <div>
      <Container>
        {singleData && (
          <Row>
            <Col className="p-5" >
              <img
                style={{ height: "450px", width:'100%'}}
                src={singleData.profile}
                alt=""
              />
            </Col>
            <Col className="m-5 p-5 text-center" >
              <ListGroup >
                <h1 className="text-success p-3">Contact details</h1>

                <ListGroup.Item>{singleData.name}</ListGroup.Item>
                <ListGroup.Item>{singleData.email}</ListGroup.Item>
                <ListGroup.Item>{singleData.mobile}</ListGroup.Item>
                <ListGroup.Item>{singleData.location}</ListGroup.Item>
              </ListGroup>
            </Col>{" "}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default SingleView;
