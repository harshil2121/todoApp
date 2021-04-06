import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist';
import Signup from './component/Signup';
import Signin from './component/Signin';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
         <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
              <Signin />
          </Route>
         <Route exact path="/">
            <Todolist />
          </Route>
        </Switch>
      </Router>               
    </div>
  );
}
export default App;