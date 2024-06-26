import { Container, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

function Homepage() {
  const navigate = useNavigate();
  const clickHandler = (link) => {
    navigate(`${link}`);
  };

  const contents = [
    { Nome: "Races", Link: "/RazzaPag", Descrizione: "Choose your race but don't be racist! maybe..." },
    { Nome: "Classes", Link: "/ClassePag", Descrizione: "Choose your class and start your adventure!" },
    { Nome: "Subclasses", Link: "/Subclass", Descrizione: "Choose your subclass and become a dumbass!" },
    { Nome: "Backgrounds", Link: "/Backgrounds", Descrizione: "Choose your background and start your adventure!" },
    { Nome: "Equipment", Link: "/Equipment", Descrizione: "Choose your equiment and go fuck yourself" },
    { Nome: "Spells", Link: "/Spells", Descrizione: "Choose your spells and become a powerful wizard!" },
    {
      Nome: "Magic Items",
      Link: "/Magic-Items",
      Descrizione: "Choose your Magic items and say hello to the true power (...Evil Laugh...)!",
    },
    {
      Nome: "Monsters",
      Link: "/MostriPag",
      Descrizione: "Choose the monsters and fight against them in your next campaign!",
    },
  ];

  return (
    <Container>
      <div>
        <h1 className="mb-4">Welcome to the best D&d Wiki</h1>
      </div>
      <div>
        <Row>
          {contents.map((content, index) => (
            <Col md={4} key={index}>
              <Card className="mb-3 rounded-4">
                <Card.Body>
                  <Card.Title>{content.Nome}</Card.Title>
                  <Card.Text>{content.Descrizione ? content.Descrizione : "No description available"}</Card.Text>
                  <button className="link text-white" onClick={() => clickHandler(content.Link)}>
                    Choose fast or die!{" "}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
export default Homepage;
