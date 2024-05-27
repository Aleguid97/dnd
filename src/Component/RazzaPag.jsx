import React, { useState, useEffect } from "react";
import { Card, Container, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RazzaPag() {
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
      <h1 className="mb-5 mt-3">Select your Race</h1>
      <Row>
        {races.length > 0 ? (
          races.map((race, index) => (
            <Col md={4} key={index}>
              <Card className="mb-3 card">
                <Card.Body>
                  <Card.Img src={`ImmaginiDnD/Razze/${race.name}.png`} variant="top" />

                  <Card.Title>{race.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <button onClick={() => clickHandler(race.index)}>Seleziona</button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <svg id="diceLoader" data-name="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.85 155.44">
            <title>dice</title>
            <polygon
              className="breathe second"
              points="66.92 154.13 131.55 116.12 66.92 108.51 66.92 154.13"
              style={{
                fill: "#446075",
                stroke: "#fff",
                strokeMiterlimit: 10,
                strokeWidth: "1.5px",
                fillRule: "evenodd",
              }}
            />
            <polygon
              className="breathe second"
              points="66.92 154.13 66.92 108.51 2.3 116.12 66.92 154.13"
              style={{ fill: "#40749b", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe third"
              points="2.3 116.12 36.51 55.3 2.3 40.09 2.3 116.12"
              style={{
                fill: "#255780",
                stroke: "#fff",
                strokeMiterlimit: 10,
                strokeWidth: "1.5px",
                fillRule: "evenodd",
              }}
            />
            <polygon
              className="breathe third"
              points="36.51 55.3 2.3 40.09 66.92 2.08 36.51 55.3"
              style={{ fill: "#40749b", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe fourth"
              points="97.33 55.3 131.55 40.09 66.92 2.08 97.33 55.3"
              style={{ fill: "#2da1c4", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe fourth"
              points="97.33 55.3 131.55 116.12 131.55 40.09 97.33 55.3"
              style={{
                fill: "#0e6d8a",
                stroke: "#fff",
                strokeMiterlimit: 10,
                strokeWidth: "1.5px",
                fillRule: "evenodd",
              }}
            />
            <polygon
              className="breathe first"
              points="66.92 108.51 131.55 116.12 97.33 55.3 66.92 108.51"
              style={{ fill: "#5e9cbf", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe first"
              points="36.51 55.3 2.3 116.12 66.92 108.51 36.51 55.3"
              style={{ fill: "#6ab0d8", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe first"
              points="36.51 55.3 66.92 2.08 97.33 55.3 36.51 55.3"
              style={{ fill: "#6ab0d8", stroke: "#fff", strokeMiterlimit: 10, strokeWidth: "1.5px" }}
            />
            <polygon
              className="breathe"
              points="66.92 108.51 97.33 55.3 36.51 55.3 66.92 108.51"
              style={{
                fill: "#9fe1ee",
                stroke: "#fff",
                strokeMiterlimit: 10,
                strokeWidth: "1.5px",
                fillRule: "evenodd",
              }}
            />
          </svg>
        )}
      </Row>
    </Container>
  );
}

export default RazzaPag;
