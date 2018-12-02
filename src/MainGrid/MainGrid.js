import _ from 'lodash'
import React from 'react'
import { 
  Container, 
  Row, 
  Col,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import './MainGrid.scss';

const columns = _.times(12, i => (
  <Col xs="3" key={i}>
    <img alt="myimg" src="images/image.png" className="img-fluid" />
  </Col>
))

const MainGrid = () => {
  return(
    <Container>
      <Row>
        <Col xs="12">
          <Form className="mt-3">
            <FormGroup>
              <InputGroup>
                <Input type="search" name="search" id="search" placeholder="search for an anime" className="noOutline"/>
                <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>

      <Row>
        {columns}
      </Row>
    </Container>
  )
}

export default MainGrid