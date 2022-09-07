import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { Pessoas } from './components/Pessoas/Pessoas';

function App() {
  return (
    <Container fluid='sm'>
      <div className='d-flex flex-column align-items-start'>
        <h1>
          Example heading <Badge bg='info'>New</Badge>
        </h1>

        <Button variant='primary'>Enviar</Button>
        <Button variant='secondary'>Enviar</Button>
      </div>

      <Row>
        <Col xs={4}>Item 1</Col>
        <Col xs={6}>Item 2</Col>
        <Col xs={1}>Item 3</Col>
        <Col xs={1}>Item 4</Col>
      </Row>

      <Pessoas />
    </Container>
  );
}

export default App;
