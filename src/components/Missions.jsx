import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        {<Title headline="Missões" />}
        { missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ +(year) }
            country={ country }
            destination={ destination }
            key={ name }
          />))}
      </div>
    );
  }
}
