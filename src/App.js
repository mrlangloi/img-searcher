import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Error from './pages/Error';
import SearchImages from './pages/SearchImages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route path="/" component={SearchImages} />
          <Route path="/Documentation" component={Documentation} />
          <Route path="/About" component={About} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
