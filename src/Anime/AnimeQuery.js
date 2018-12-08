import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

export default class AnimeQuery extends Component {

  render(){
    return (
      <Query
        query={gql`
          query ($id: Int, $page: Int, $perPage: Int, $search: String) { 
            Page(page: $page, perPage: $perPage) {
              pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
              }

              media (id: $id, search: $search) {
                id 
                title {
                  romaji
                  english
                  native
                }
              }
            }
          }
        `}

        variables={{search: this.props.search, page: 1, perPage: 6}}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          
          const listAnime = data.Page.media.map((anime) => 
            <li key={anime.id}>Romaji: {anime.title.romaji}</li>
          );

          return (
            <ul>
              {listAnime}
            </ul>
          );
        }} 
      </Query>
    )
  }
}

AnimeQuery.propTypes = {
  search: PropTypes.string
}

AnimeQuery.defaultProps = {
  search: ''
}