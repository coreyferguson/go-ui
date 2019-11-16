import React from 'react';
import styled from 'styled-components';

const SimpleMessagePageContainerStyle = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;

  > * {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;

    section {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default SimpleMessagePageContainerStyle;