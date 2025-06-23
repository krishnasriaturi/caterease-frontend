import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './components/Landing';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import ServicesPage from './components/ServicesPage';
import ServiceDetails from './components/ServiceDetails';
import Login from './components/Login';
import GuestSubmissions from './components/GuestSubmissions';
import BillPage from './components/BillPage';

// New Features for Cater-Ease Event Flow
import CreateEvent from './components/CreateEvent';
import EventCredentials from './components/EventCredentials';
import ViewPreferences from './components/ViewPreferences';
import GuestForm from './components/GuestLoginForm';
import Organizer from './components/Organizer';
import OrganizerLogin from './components/Organizer';
import OrganizerDashboard from './components/OrganizerDashboard';

function App() {
  return (
    <Router>
      {/* Background design */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <hr className="border-t-2 border-gray-300 w-screen" />

        <Routes>
          {/* General Pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/bill/:id" element={<BillPage />} />

          {/* Cater-Ease Flows */}
          <Route path="/login" element={<Login />} />
          <Route path="/GuestLoginForm" element={<GuestForm />} />
          <Route path="/GuestSubmissions" element={<GuestSubmissions />} />
          
          {/* Organizer Event Flow */}
          <Route path="/Organizer" element={<Organizer />} />

          <Route path="/OrganizerDashboard" element={<OrganizerDashboard />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
          <Route path="/EventCredentials" element={<EventCredentials />} />
          <Route path="/ViewPreferences" element={<ViewPreferences />} />
        </Routes>

        <hr className="my-8 border-t-2 border-gray-300" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
