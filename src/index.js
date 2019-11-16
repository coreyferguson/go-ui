
import ReactDOM from 'react-dom';
import Login from './auth/Login';
import Theme from './theme/Theme.jsx';
import './index.scss';

const container = document.getElementById('container');
ReactDOM.render(<Theme><Login/></Theme>, container);
