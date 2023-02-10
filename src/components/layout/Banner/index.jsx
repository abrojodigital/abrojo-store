import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from 'react-bootstrap';

const Banner = ({ imgBackGround, title, caption, greeting }) => {

  return (
    <section>
    <Container>
      <Row>
        <Col md={8} lg={9} className="d-none d-md-block offset-md-n2 order-2">
          <div className="h-100 flickity-buttons-bottom-start">
            <Image src={imgBackGround} className="w-100 bg-cover" />
          </div>
        </Col>
        <Col md={6} lg={5} className="py-15 order-1 position-relative">
          <h1 className="display-4 mb-8">{title}</h1>
          <Link to="/products" className="btn btn-light" role="button">
            {caption} <i className="fe fe-arrow-right ms-4"></i>
          </Link>
        </Col>
      </Row>
      <Row>
      <Col className="position-relative">
          <h3 className="m-5 text-center">{greeting}</h3>
      </Col>
      </Row>
    </Container>
  </section>
  )
}

export { Banner };