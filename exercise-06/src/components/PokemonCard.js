import React from 'react'
import Fragment from 'graphql-fragments'
import gql from 'graphql-tag'

class PokemonCard extends React.Component {

  static fragments = {
    pokemon: new Fragment(gql`
      fragment PokemonCardPokemon on Pokemon {
        imageUrl
        name
      }
    `)
  }

  static propTypes = {
    pokemon: PokemonCard.fragments.pokemon.propType,
    handleCancel: React.PropTypes.func.isRequired,
    afterChange: React.PropTypes.func.isRequired,
  }

  state = {
    name: this.props.pokemon.name,
    imageUrl: this.props.pokemon.imageUrl,
  }

  render () {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.name}
            placeholder='Name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.imageUrl}
            placeholder='Image Url'
            onChange={(e) => this.setState({imageUrl: e.target.value})}
          />
          {this.state.imageUrl &&
            <img src={this.state.imageUrl} role='presentation' className='w-100 mv3' />
          }
          <div className='flex justify-between'>
            <button className='pa3 bn dim ttu bg-red pointer' onClick={this.handleDelete}>Delete</button>
            <button className='pa3 bn dim ttu pointer' onClick={this.props.handleCancel}>Cancel</button>
            {this.canUpdate()
              ? <button className='pa3 bn dim ttu bg-dark-green pointer' onClick={this.handleUpdate}>Update</button>
              : <button className='pa3 bn ttu gray light-gray'>Update</button>
            }
          </div>
        </div>
      </div>
    )
  }

  canUpdate = () => {
    return this.state.name && this.state.imageUrl &&
      (this.props.pokemon.name !== this.state.name || this.props.pokemon.imageUrl !== this.state.imageUrl)
  }

  handleUpdate = () => {

  }

  handleDelete = () => {

  }
}

export default PokemonCard
