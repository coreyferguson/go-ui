import React from 'react';
import Navigation from '../routing/Navigation';
import PropTypes from 'prop-types';

export default function DefaultPageContainer(props) {
  return (
    <div>
      <Navigation />
      <section className='content'>
        {props.children}
      </section>
    </div>
  );
}

DefaultPageContainer.propTypes = {
  children: PropTypes.element
};