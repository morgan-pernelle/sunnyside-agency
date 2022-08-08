// == Import
import './style.scss';
import Reviews from '../Reviews';
import Content from '../Content';
import Header from '../Header';
import Footer from '../Footer';
import Pictures from '../Pictures';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Reviews />
      <Pictures />
      <Footer />
    </div>
  );
}

// == Export
export default App;
