
import ReactDOM from 'react-dom';
import Router from './routing/AppRouter.jsx';
import RootStyle, { GlobalStyle } from '@bit/overattribution.growme.root-style';

const container = document.getElementById('container');
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <RootStyle>
      <Router/>
    </RootStyle>
  </React.Fragment>,
  container);
