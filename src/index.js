
import ReactDOM from 'react-dom';
import Router from './routing/AppRouter.jsx';
import Theme from './theme/Theme.jsx';
import './index.scss';

const container = document.getElementById('container');
ReactDOM.render(<Theme><Router/></Theme>, container);
