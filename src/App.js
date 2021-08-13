import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Meal } from './routes/Meal';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:mealName" component={Meal}></Route>
      </Switch>
    </Router>
  );
}

export default App;
