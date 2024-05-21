import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Membeship from './Pages/Membeship/Membeship';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Membership" element={<Membeship/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
