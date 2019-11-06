/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/*  import PropTypes from 'prop-types'; */
import React from 'react';

const Card = ({
  game: {
    name,
    year_published,
    primary_publisher,
    images: { small },
  },
}) => {
  return (
    <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="game" src={small} />
      <div>
        <h2>{name}</h2>
        <p>{year_published}</p>
        <p>{primary_publisher}</p>
      </div>
    </div>
  );
};

export default Card;
