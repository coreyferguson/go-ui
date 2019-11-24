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

    input[type='text'] {
      background-color: ${styles.background_2};
      border-width: 0;
      color: ${styles.foreground_2};
      padding: 5px 10px 5px 10px;
      margin: 0 5px 5px 5px;
      border-bottom: 1px solid ${styles.foreground_2};
      @media screen and (max-width: 799px) {
        font-size: ${styles.font_size_cozy};
      }
      @media screen and (min-width: 800px) {
        font-size: ${styles.font_size_spacious};
      }
    }

    input[type='text']:focus {
      outline: 0;
      border-bottom: 1px solid ${styles.primary};
    }

    button {
      background-color: ${styles.primary};
      border: 0;
      color: ${styles.foreground_2};
      padding: 5px 10px 5px 10px;
      margin: 0 5px 0 5px;
      border-radius: ${styles.border_radius};
      cursor: pointer;
      @media screen and (max-width: 799px) {
        font-size: ${styles.font_size_cozy};
      }
      @media screen and (min-width: 800px) {
        font-size: ${styles.font_size_spacious};
      }
    }

    button:hover {
      background-color: ${styles.primary_darken_2};
    }
  `;
}
