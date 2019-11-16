import Style from './DefaultPageContainerStyle.jsx';
import View from './DefaultPageContainerView.jsx';
export default function DefaultPageContainer(props) {
  return <Style><View {...props} /></Style>;
}