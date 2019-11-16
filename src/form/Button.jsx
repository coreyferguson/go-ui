
import React from 'react';
import styled from 'styled-components';
import { styles } from '../theme/Theme.jsx';

const ButtonStyle = styled.button`
  background-color: ${styles.primary};
  border: 0;
  border-radius: 10px 5px 10px 5px;
  color: ${styles.foreground_2};
  padding: 10px;
  font-size: ${styles.font_size_spacious};
  cursor: pointer;

  :hover {
    background-color: ${styles.primary_darken_2};
  }
`;

export default ButtonStyle;