import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default class AnimeQuery extends Component {

  render(){
    return (
      <Query
        query={gql`
          query ($id: Int) { 
            Media (id: $id, type: ANIME) {
              id
              title {
                romaji
                english
                native
              }
            }
          }
        `}

        variables={{id: '15125'}}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <ul>
              <li>Romaji: {data.Media.title.romaji}</li>
            </ul>
          );
        }} 
      </Query>
    )
  }
}