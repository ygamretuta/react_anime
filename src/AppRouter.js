import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";

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
          <Menu pointing secondary>
            <Menu.Item
              name='home'
              as={Link} to='/'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>
          </Menu>

          <Route path="/" exact component={Home} />
        </>
      </Router>
      </ApolloProvider>
    )
  }
}
