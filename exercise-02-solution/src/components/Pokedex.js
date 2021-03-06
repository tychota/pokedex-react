import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Pokedex extends React.Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired,
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <div className='tc pa5'>
          Hey {this.props.data.Trainer.name}, there are 0 Pokemons in your pokedex
        </div>
      </div>
    )
  }
}

const TrainerQuery = gql`query {
  Trainer(name: "__NAME__") {
    name
  }
}`

const PokedexWithData = graphql(TrainerQuery)(Pokedex)

export default PokedexWithData
