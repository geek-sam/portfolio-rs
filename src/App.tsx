// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/index";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ArchivePage from "./routes/archive";
import WorkPage from "./routes/work";
import ContactPage from "./routes/contact";
import AboutPage from "./routes/about";
import NotFoundPage from "./routes/404";
import Preloader from "./components/animations/PreLoader";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

export default function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Preloader />
      {/* <ScrollReveal /> */}
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
