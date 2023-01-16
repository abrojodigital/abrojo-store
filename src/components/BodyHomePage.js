import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BodyHomePage() {
  return (
    <Card>
      <Card.Header>Una tienda para nerdearla</Card.Header>
      <Card.Body>
        <Card.Title>Atención personalizada y súper exclusiva </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Ir al catálogo de productos</Button>
      </Card.Body>
    </Card>
  );
}

export default BodyHomePage;