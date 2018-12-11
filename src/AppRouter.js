import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Home from './Home/Home'

export default class AppRouter extends Component {
  
  state = {activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state;

    const client = new ApolloClient({
      uri: "https://graphql.anilist.co"
    });

    return(
      <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ygam's Anime Utils</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <Route path="/" exact component={Home} />
        </>
      </Router>
      </ApolloProvider>
    )
  }
}
