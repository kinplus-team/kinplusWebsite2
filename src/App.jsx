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

import SponsorUs from "./pages/sponsor-or-partner-with-us/Index.jsx";
import PageNotFound from "./pages/PageNotFound/index.jsx";


const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
function App() {
   return (
     <Router>
       <ScrollToTop />
       <Routes>
         <Route
           path="/"
           element={
             <MainLayout>
               <Home />
             </MainLayout>
           }
         />
         <Route
           path="/kinplus"
           element={
             <MainLayout>
               <Home />
             </MainLayout>
           }
         />
         <Route
           path="/about-us"
           element={
             <MainLayout>
               <AboutUs />
             </MainLayout>
           }
         />
         <Route
           path="/about"
           element={
             <MainLayout>
               <AboutUs />
             </MainLayout>
           }
         />
         <Route
           path="/our-services"
           element={
             <MainLayout>
               <Services />
             </MainLayout>
           }
         />
         <Route
           path="/blog"
           element={
             <MainLayout>
               <Blog />
             </MainLayout>
           }
         />
         <Route
           path="/blog/:article"
           element={
             <MainLayout>
               <BlogPost />
             </MainLayout>
           }
         />
         <Route
           path="/contact-us"
           element={
             <MainLayout>
               <ContactUs />
             </MainLayout>
           }
         />
         <Route
           path="/contact-us/services"
           element={
             <MainLayout>
               <ContactUsServices />
             </MainLayout>
           }
         />
         <Route
           path="/contact-us/training"
           element={
             <MainLayout>
               <ContactUsTraining />
             </MainLayout>
           }
         />
         <Route
           path="/trainings"
           element={
             <MainLayout>
               <Training />
             </MainLayout>
           }
         />
         <Route
           path="/training"
           element={
             <MainLayout>
               <Training />
             </MainLayout>
           }
         />
         <Route
           path="/trainings/courses/:training"
           element={
             <MainLayout>
               <ProgramDetails />
             </MainLayout>
           }
         />
         <Route
           path="/trainings/siwes"
           element={
             <MainLayout>
               <Internship />
             </MainLayout>
           }
         />
         <Route
           path="/siwes"
           element={
             <MainLayout>
               <Internship />
             </MainLayout>
           }
         />
         <Route
           path="/trainings/workshop"
           element={
             <MainLayout>
               <Workshop />
             </MainLayout>
           }
         />
         <Route
           path="/trainings/workshop/:details"
           element={
             <MainLayout>
               <WorkshopDetails />
             </MainLayout>
           }
         />
         <Route
           path="/careers"
           element={
             <MainLayout>
               <Career />
             </MainLayout>
           }
         />
         <Route
           path="/careers/:career"
           element={
             <MainLayout>
               <CareerDetails />
             </MainLayout>
           }
         />
         <Route
           path="/sponsor-or-partner-with-us"
           element={
             <MainLayout>
               <SponsorUs />
             </MainLayout>
           }
         />
         <Route
           path="/*"
           element={<PageNotFound />}
         />
       </Routes>
       <ToastContainer
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         closeButton={false}
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
       />
     </Router>
   );
}

export default App;
