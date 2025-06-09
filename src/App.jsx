import './App.css';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesPage from './components/ServicesPage';
import ServiceDetails from './components/ServiceDetails';
import Login from './components/Login';
import GuestSubmissions from './components/GuestSubmissions';
import BillPage from './components/BillPage';

function App() {
  return (
    <Router>
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>


      <div className="relative z-10">
        <Navbar />
        <hr className="border-t-2 border-gray-300 w-screen" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guest-submissions" element={<GuestSubmissions />} />
          <Route path="/bill/:id" element={<BillPage />} />
        </Routes>
        <hr className="my-8 border-t-2 border-gray-300" />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
