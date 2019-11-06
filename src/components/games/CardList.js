/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';
import Spinner from '../layout/Spinner';

const CardList = ({ loading, dataFound, games }) => {
  if (loading) {
    return <Spinner />;
  }
  if (dataFound) {
    return (
      <div>
        {games.map(game => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    );
  }
  return (
    <p className="mw7 near-white center f1 lh-title">
      Data Not Found
    </p>
  );
};

export default CardList;
