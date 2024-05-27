import Card from "react-bootstrap/Card";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <Card className="text-center footer">
      <Card.Body>
        <Card.Title>Roll the dice ©</Card.Title>
        <Card.Text>Nerd è bello e rimorchia pure</Card.Text>
        <Card.Text>Applicazione realizzata da A&G srl</Card.Text>
        <div className="icon-container">
          <a href="https://github.com/Aleguid97" target="_blank" rel="noopener noreferrer">
            <BsGithub className="icon" />
          </a>
          <BsFacebook className="icon" />
          <a href="https://www.instagram.com/flanders.findus/" target="_blank" rel="noopener noreferrer">
            <BsInstagram className="icon" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;
