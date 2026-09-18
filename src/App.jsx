import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ContactForm from './components/ContactForm.jsx';
import LocationBand from './components/LocationBand.jsx';
import Home from './pages/Home.jsx';
import Studio from './pages/Studio.jsx';
import Work from './pages/Work.jsx';
import Project from './pages/Project.jsx';
import Process from './pages/Process.jsx';
import Offers from './pages/Offers.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';

/** Pages that already contain the form and the map. */
const OWNS_CONTACT = ['/contatti'];

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const showContact = !OWNS_CONTACT.includes(location.pathname);

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <Page key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<Studio />} />
            <Route path="/realizzazioni" element={<Work />} />
            <Route path="/realizzazioni/:slug" element={<Project />} />
            <Route path="/servizi" element={<Process />} />
            <Route path="/offerte" element={<Offers />} />
            <Route path="/contatti" element={<Contact />} />
            <Route path="/note-legali" element={<Legal doc="note-legali" />} />
            <Route path="/privacy" element={<Legal doc="privacy" />} />
            <Route path="*" element={<Home />} />
          </Routes>

          {showContact && (
            <>
              <ContactForm />
              <LocationBand />
            </>
          )}
        </Page>
      </AnimatePresence>

      <Footer />
      <Analytics />
    </>
  );
}
