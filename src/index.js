import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
 
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  document.getElementById('root')
);