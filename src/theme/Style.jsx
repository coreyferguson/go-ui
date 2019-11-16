import styled from 'styled-components';
export default styles => {
  return styled.div`
    color: ${styles.foreground_2};
    letter-spacing: ${styles.letter_spacing};

    @media (min-width: 800px) {
      font-size: ${styles.fontSizeSpacious};
    }

    @media (max-width: 799px) {
      font-size: ${styles.fontSizeCompact};
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-style: normal;
      font-weight: normal;
    }
  `;
}
