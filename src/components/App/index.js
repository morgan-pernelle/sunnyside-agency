// == Import
import Reviews from '../Reviews';
import Content from '../Content';
import Header from '../Header';
import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Reviews />
    </div>
  );
}

// == Export
export default App;
