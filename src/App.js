
import './App.css';
import {Routes, Route} from 'react-router-dom'
import StripeGradient from './components/StripeGradient';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/portfolio/' element={<StripeGradient />} />
      <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
