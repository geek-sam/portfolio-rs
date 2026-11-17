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
import ProjectDetailPage from "./routes/projectDetail";
import Preloader from "./components/animations/PreLoader";
import PageTransition from "./components/animations/PageTransition";

export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
          <Route path="/project/:slug" element={<ProjectDetailPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}
