
import './App.css'
import BookingSection from './components/BookingSection';
import CarSelection from './components/CarSelection';
import DriverAvailableApp from './components/DriverAvailableApp';

import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {

   return (
    <>
    <Navbar />
    <BookingSection />
    <CarSelection />
    <DriverAvailableApp />
    <Footer />
    </>
  );
}

export default App
