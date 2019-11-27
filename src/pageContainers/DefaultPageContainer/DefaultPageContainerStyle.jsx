import React from 'react';
import styled from 'styled-components';

const DefaultPageContainerStyle = styled.div`
  section {
    @media screen and (max-width: 799px) {
      padding: 0 5px 0 5px;
    }
    @media screen and (min-width: 800px) {
      padding: 0 20px 0 20px;
    }
  }
`;

export default DefaultPageContainerStyle;