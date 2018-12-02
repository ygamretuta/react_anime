import React, { Component } from 'react'
import MainGrid from '../MainGrid/MainGrid'
import AnimeQuery from  '../Anime/AnimeQuery'
import './Home.css'

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