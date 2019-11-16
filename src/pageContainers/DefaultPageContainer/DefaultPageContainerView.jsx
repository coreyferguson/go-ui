import React from 'react';
import Navigation from '../../routing/Navigation';
import PropTypes from 'prop-types';

export default function DefaultPageContainerView(props) {
  return (
    <div>
      <Navigation />
      <section>
        {props.children}
      </section>
    </div>
  );
}

DefaultPageContainerView.propTypes = {
  children: PropTypes.element
};