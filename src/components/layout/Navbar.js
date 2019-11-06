import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

export default function Navbar({ title }) {
  return (
    <div className="bg-lightest-blue w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 tl ttu tracked">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="dib ma3">{title}</h1>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
