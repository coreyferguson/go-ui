import styled from 'styled-components';
export default styles => {
  return styled.div`
    color: ${styles.foreground_2};
    letter-spacing: ${styles.letter_spacing};
    font-family: ${styles.font_family};

    @media screen and (min-width: 800px) {
      font-size: ${styles.font_size_spacious};
    }

    @media screen and (max-width: 799px) {
      font-size: ${styles.font_size_compact};
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-style: normal;
      font-weight: normal;
    }

    h1 {
      // desktop
      @media (min-width: 800px) {
        font-size: ${styles.h1_spacious};
      }

      // mobile
      @media (max-width: 799px) {
        font-size: ${styles.h1_cozy};
      }
    }

    h2 {
      // desktop
      @media (min-width: 800px) {
        font-size: ${styles.h2_spacious};
      }

      // mobile
      @media (max-width: 799px) {
        font-size: ${styles.h2_cozy};
      }

    }

  `;
}
