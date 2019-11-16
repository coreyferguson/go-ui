import createStyle from './Style.jsx';
import selectedStyles from './StyleDark';
import PropTypes from 'prop-types';

const Style = createStyle(selectedStyles);

export default function Theme(props) {
  return (
    <Style>{props.children}</Style>
  );
}

export const styles = selectedStyles;

Theme.propTypes = {
  children: PropTypes.element
};
