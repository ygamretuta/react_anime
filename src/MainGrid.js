import _ from 'lodash'
import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const columns = _.times(12, i => (
  <Col xs="3" key={i}>
    <img alt="myimg" src="images/image.png" class="img-fluid" />
  </Col>
))

const MainGrid = () => {
  return(
    <Container>
      <Row>
        {columns}
      </Row>
    </Container>
  )
}

export default MainGrid