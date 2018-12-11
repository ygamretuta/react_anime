import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import './AnimeQuery.scss'
import styled from 'styled-components'

export default class AnimeQuery extends Component {

  render(){
    const AnimeH1 = styled.h1`
      font-size: 1em;
    `;

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
                coverImage {
                  large
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
            <li key={anime.id} className="col-md-4 col-sm-6 col-lg-3 mb-5 li-query-anime">
              <AnimeH1>{anime.title.romaji}</AnimeH1>
              <div>
                <img className="img-fluid img-scaledown" src={anime.coverImage.large} alt={anime.title.romaji} />
              </div>
            </li>
          );

          return (
            <ul className="row list-unstyled" >
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