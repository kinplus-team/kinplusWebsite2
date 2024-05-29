import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index.jsx";

// contact us components
import ContactUs from "./pages/ContactUS/Index";
import ContactUsServices from "./pages/ContactUS/ContactUsServices/Index.jsx";
import ContactUsTraining from "./pages/ContactUS/ContactUsTraining/Index.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/about-us/Index";
import Training from "./pages/Training/Index.jsx";
import Header from "./components/navbar/DesktopMenu.jsx";
import Footer from "./components/footer/Index.jsx";
import Services from "./pages/Services/Index";
import ProgramDetails from "./pages/program-details/ProgramDetails";
import Internship from "./pages/Internship/Internship";
import Career from "./pages/careers/Career.jsx";
import CareerDetails from "./pages/careers-details/CareersDetails.jsx";
import Workshop from "./pages/workshop/Workshop.jsx";
import WorkshopDetails from "./pages/workshop-details/WorkshopDetails.jsx";
import Blog from "./pages/blog/Index.jsx";
import BlogPost from "./pages/blog/BlogPost/Index.jsx";
import ScrollToTop from "./components/scrollToTop/Index.jsx";

function App() {
  return (
    <>
      <Router>
    <ScrollToTop/>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:article" element={<BlogPost />} />

          {/* contact us routes */}
          <Route path="/contact-us/*" element={<ContactUs />} />
          <Route path="/contact-us/services" element={<ContactUsServices />} />
          <Route path="/contact-us/training" element={<ContactUsTraining />} />

          {/*training routes  */}
          <Route path="/trainings" element={<Training />} />
          <Route
            path="/trainings/courses/:training"
            element={<ProgramDetails />}
          />
          <Route path="/trainings/internship" element={<Internship />} />
          <Route path="/trainings/workshop" element={<Workshop />} />
          <Route
            path="/trainings/workshop/:details"
            element={<WorkshopDetails />}
          />

          {/* career routes */}
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:career" element={<CareerDetails />} />
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
