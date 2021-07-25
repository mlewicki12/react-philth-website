
import Router from './router';
import './App.scss';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      {false && <h1 className='app-title'>PHILTH ZINE</h1>}
      <Navigation />
    </Router>
  );
}

export default App;
