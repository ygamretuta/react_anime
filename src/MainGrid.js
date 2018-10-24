import _ from 'lodash'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const columns = _.times(12, i => (

  <Grid.Column key={i}>
    <Image src='images/image.png' />
  </Grid.Column>
))

const MainGrid = () => <Grid>{columns}</Grid>

export default MainGrid