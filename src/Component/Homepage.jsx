import React, { useState, useEffect } from "react";
import { Card, Button, Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [races, setRaces] = useState([]);
  const navigate = useNavigate();
  const clickHandler = (index) => {
    navigate(`/Dettaglio/${index}`);
  };

  useEffect(() => {
    async function fetchRaces() {
      try {
        const response = await fetch("https://www.dnd5eapi.co/api/races/");
        const data = await response.json();
        setRaces(data.results);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }

    fetchRaces();
  }, []);

  return (
    <Container>
      <h1 className="mb-5 mt-3">Razze</h1>
      <Row>
        {races.length > 0 ? (
          races.map((race, index) => (
            <Col md={4}>
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{race.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button onClick={() => clickHandler(race.index)} variant="outline-secondary">
                    Seleziona
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Homepage;
