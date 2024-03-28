import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Index";
import ContactUs from "./pages/ContactUS/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs/Index";
import Training from "./pages/Training/Index";
import Header from "./components/navbar/Index";
import Footer from "./components/Footer/Index";
import Services from "./pages/Services/Index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/contact-us/*" element={<ContactUs />} />
          <Route path="/training/*" element={<Training />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
