import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar";
import FooterTicker from "./Components/Footer";
import Research from "./Pages/Research";
import PatientEducationPreview from "./Pages/PatientEducationPreview";
import ProfessionalEducation from "./Pages/ProfessionalEducation";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import PageTransition from "./Components/PageTransition";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <ScrollToTop />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/research" element={<Research />} />
          <Route
            path="/patient-education"
            element={<PatientEducationPreview />}
          />
          <Route
            path="/professional-education"
            element={<ProfessionalEducation />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <FooterTicker />
    </>
  );
};

export default App;
