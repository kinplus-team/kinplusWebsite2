import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/HomeIndex.jsx";
import ContactUs from "./pages/ContactUS/ContactUsIndex.jsx";
import ContactUsServices from "./pages/ContactUS/ContactUsServices/ContactUsServiceIndex.jsx";
import ContactUsTraining from "./pages/ContactUS/ContactUsTraining/ContactUsTrainingIndex.jsx";
import ScrollToTop from "./components/scrollToTop/ScrollToTopIndex.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/navbar/DesktopMenu.jsx";
import SponsorUs from "./pages/sponsor-or-partner-with-us/SponsorPartnerIndex.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { FaSpinner } from "react-icons/fa6";

// Lazy load components
const AboutUs = lazy(() => import("./pages/about-us/AboutUsIndex.jsx"));
const Training = lazy(() => import("./pages/Training/TrainingIndex.jsx"));
const Footer = lazy(() => import("./components/footer/Footer.jsx"));
const Services = lazy(() => import("./pages/Services/ServicesIndex.jsx"));
const ProgramDetails = lazy(() =>
  import("./pages/program-details/ProgramDetails")
);
const Internship = lazy(() => import("./pages/Internship/Internship"));
const Career = lazy(() => import("./pages/careers/Career.jsx"));
const Workshop = lazy(() => import("./pages/workshop/Workshop.jsx"));
const Blog = lazy(() => import("./pages/blog/BlogIndex.jsx"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost/BlogPostIndex.jsx"));
const Events = lazy(() => import("./pages/events/EventsIndex.jsx"));
const WorkshopDetails = lazy(() =>
  import("./pages/workshop-details/WorkshopDetails.jsx")
);
const CareerDetails = lazy(() =>
  import("./pages/careers-details/CareersDetails.jsx")
);
const CookieConsent = lazy(() =>
  import("./components/cookies/CookiesConsent.jsx")
);

import { AnimatePresence, motion } from "framer-motion";

const MainLayout = ({ children }) => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Set a delay to show the footer
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-M8G6XBFLQC";
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-M8G6XBFLQC", {
        transport_type: "beacon",
        anonymize_ip: true,
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
      {showFooter && (
        <Suspense fallback={<LoadingScreen />}>
          <Footer />
        </Suspense>
      )}
    </motion.div>
  );
};

const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <FaSpinner className="animate-spin text-4xl text-blue-500" />
  </div>
);

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCookieConsent(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showCookieConsent && (
        <Suspense fallback={<FaSpinner />}>
          <CookieConsent />
        </Suspense>
      )}

      <Router>
        <ScrollToTop />
        <AnimatePresence>
          <Routes>
            <Route
              key="home"
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              key="about-us"
              path="/about-us"
              element={
                <MainLayout>
                  <AboutUs />
                </MainLayout>
              }
            />
            <Route
              key="services"
              path="/our-services"
              element={
                <MainLayout>
                  <Services />
                </MainLayout>
              }
            />
            <Route
              key="contact-us"
              path="/contact-us"
              element={
                <MainLayout>
                  <ContactUs />
                </MainLayout>
              }
            />
            <Route
              key="/contact-us"
              path="/contact-us"
              element={
                <MainLayout>
                  <ContactUs />
                </MainLayout>
              }
            />
            <Route
              key="/blogs"
              path="/blogs"
              element={
                <MainLayout>
                  <Blog />
                </MainLayout>
              }
            />
            <Route
              key="/events"
              path="/events"
              element={
                <MainLayout>
                  <Events />
                </MainLayout>
              }
            />
            <Route
              key="/contact-us/services"
              path="/contact-us/services"
              element={
                <MainLayout>
                  <ContactUsServices />
                </MainLayout>
              }
            />
            <Route
              key="/contact-us/training"
              path="/contact-us/training"
              element={
                <MainLayout>
                  <ContactUsTraining />
                </MainLayout>
              }
            />
            <Route
              key="/trainings"
              path="/trainings"
              element={
                <MainLayout>
                  <Training />
                </MainLayout>
              }
            />
            <Route
              key="/trainings/courses/:training"
              path="/trainings/courses/:training"
              element={
                <MainLayout>
                  <ProgramDetails />
                </MainLayout>
              }
            />
            <Route
              key="/trainings/siwes"
              path="/trainings/siwes"
              element={
                <MainLayout>
                  <Internship />
                </MainLayout>
              }
            />
            <Route
              key="/trainings/workshop"
              path="/trainings/workshop"
              element={
                <MainLayout>
                  <Workshop />
                </MainLayout>
              }
            />
            <Route
              key="/trainings/workshop/:details"
              path="/trainings/workshop/:details"
              element={
                <MainLayout>
                  <WorkshopDetails />
                </MainLayout>
              }
            />
            <Route
              key="/careers"
              path="/careers"
              element={
                <MainLayout>
                  <Career />
                </MainLayout>
              }
            />
            <Route
              key="/careers/:career"
              path="/careers/:career"
              element={
                <MainLayout>
                  <CareerDetails />
                </MainLayout>
              }
            />
            <Route
              key="/sponsor-or-partner-with-us"
              path="/sponsor-or-partner-with-us"
              element={
                <MainLayout>
                  <SponsorUs />
                </MainLayout>
              }
            />

            {/* Redirect paths */}
            <Route
              path="/about"
              element={
                <Navigate
                  to="/about-us"
                  replace
                />
              }
            />
            <Route
              path="/training"
              element={
                <Navigate
                  to="/trainings"
                  replace
                />
              }
            />
            <Route
              path="/siwes"
              element={
                <Navigate
                  to="/trainings/siwes"
                  replace
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Navigate
                  to="/contact-us"
                  replace
                />
              }
            />

            <Route
              path="/kinplus"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
            <Route
              path="/*"
              element={<PageNotFound />}
            />
          </Routes>
        </AnimatePresence>

        {/* Toast notifications */}
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
    </>
  );
}

export default App;
