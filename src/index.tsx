import ReactDOM from 'react-dom';
import { BrowserRouter as ConnectedRouter } from 'react-router-dom';

import { Routes } from './router';

ReactDOM.render(
  <ConnectedRouter>
    <Routes />
  </ConnectedRouter>,
  document.getElementById('root')
);