import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Index";
import ContactUs from "./pages/ContactUS/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/about-us/Index";
import Training from "./pages/Training/Index";
import Header from "./components/navbar/Index";
import Footer from "./components/footer/Index.jsx";
import Services from "./pages/Services/Index";
import ProgramDetails from "./pages/program-details/ProgramDetails";
import Internship from "./pages/Internship/Internship";
import Career from "./pages/careers/Career.jsx";
import CareerDetails from "./pages/careers-details/CareersDetails.jsx";
import Workshop from "./pages/workshop/Workshop.jsx";
import WorkshopDetails from "./pages/workshop-details/WorkshopDetails.jsx";
import Blog from "./pages/blog/index.jsx";
import BlogPost from "./pages/blog/BlogPost/Index.jsx";

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
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/training/:training" element={<ProgramDetails />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:career" element={<CareerDetails />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/:details" element={<WorkshopDetails />} />
          
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
