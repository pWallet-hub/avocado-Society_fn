import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Membeship from './Pages/Membeship/Membeship';
import Register from './Pages/Register/Register';
import Ressource from './Pages/Ressource/Ressource';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Membership" element={<Membeship/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path='/Resources' element={<Ressource/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
