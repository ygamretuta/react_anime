import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
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

import AnimeQuery from  '../Anime/AnimeQuery';


import './MainGrid.scss';

export default class MainGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchValue: ''};
  }

  columns = _.times(12, i => (
    <Col xs="3" key={i}>
      <img alt="myimg" src="images/image.png" className="img-fluid" />
    </Col>
  ))
  
  handleChange = (event) => {
    /* TODO: do something on search value change */
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({searchValue: data.get('search')});
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

        <Row>
          <Col xs="12" id="query-container">
            <AnimeQuery search={this.state.searchValue} />
          </Col>
        </Row>
      </Container>
    )
  }
}