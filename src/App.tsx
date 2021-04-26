
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './normalize.css'
import './App.css';
import { HomePage } from './presentation/pages/home/home';
import { Login } from './presentation/pages/login/login';
import { EditPage } from './presentation/pages/edit/edit';

function App() {
  return (
    <Router>
     
      <Switch>
         <Route path="/" exact  component={ Login } />
         <Route path="/home"  component={ HomePage } />
         <Route path="/edit"  component={ EditPage } />
      </Switch>

    </Router>
  );
}

export default App;
