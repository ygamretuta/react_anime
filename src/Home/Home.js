import React, { Component } from 'react'
import MainGrid from '../MainGrid'
import AnimeQuery from  '../Anime/AnimeQuery'

class Home extends Component {
  render() {
    return (
      <>
        <MainGrid />
        <AnimeQuery />
      </>
    );
  }
}

export default Home