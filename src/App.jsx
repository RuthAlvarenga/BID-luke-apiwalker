import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Principal from './Components-principal/Principal';
import Personas from './Personas/Personas';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => <Principal /> }/>
        <Route path="/:id" exact render={(routeProps ) => <Personas {...routeProps}/> }/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
