import _ from 'lodash'
import React from 'react'
import { 
  Container, 
  Row, 
  Col,
  Button, 
  Form, 
  FormGroup, 
  Input, 
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import './MainGrid.scss';

export default class MainGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchValue: ''};
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value});
  }

  columns = _.times(12, i => (
    <Col xs="3" key={i}>
      <img alt="myimg" src="images/image.png" className="img-fluid" />
    </Col>
  ))

  handleSubmit = (event) => {
    alert('Form submitted');
    event.preventDefault();
  }

  render() {
    return(
      <Container>
        <Row>
          <Col xs="12">
            <Form className="mt-3" onSubmit={this.handleSubmit}>
              <FormGroup>
                <InputGroup>
                  <Input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="search for an anime" 
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                    className="noOutline"/>
                  <InputGroupAddon addonType="append">
                    <Button color="secondary" type="submit" className="noOutline">Search</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
  
        <Row>
          {this.columns}
        </Row>
      </Container>
    )
  }
}