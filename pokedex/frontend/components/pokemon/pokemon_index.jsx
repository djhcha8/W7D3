import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon.map((pokemon, idx) => {
      return (
        <li key={idx}>
          {pokemon.name}
          <img src={pokemon.image_url} />
        </li>
      );
    });

    return (
      <ul>
        {pokemon}
      </ul>
    );
  }

}

export default PokemonIndex;
