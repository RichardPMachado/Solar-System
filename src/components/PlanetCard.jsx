import React, { Component } from 'react';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

// PlanetCard.propTypes = {
//   planetCard: propTypes.exact({
//     planetName: PropTypes.string,
//     planetImage: PropTypes.string,
//   }).isRequired,
// };