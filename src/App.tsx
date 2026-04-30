/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Lazy-load all non-Home routes — they're only downloaded when navigated to
const VisionPage = lazy(() => import("./pages/VisionPage"));
const ResidencesPage = lazy(() => import("./pages/ResidencesPage"));
const AmenitiesPage = lazy(() => import("./pages/AmenitiesPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const InquirePage = lazy(() => import("./pages/InquirePage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-black/10 border-t-[#D4AF37] rounded-full animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/vision" element={<Suspense fallback={<PageLoader />}><PageWrapper><VisionPage /></PageWrapper></Suspense>} />
        <Route path="/residences" element={<Suspense fallback={<PageLoader />}><PageWrapper><ResidencesPage /></PageWrapper></Suspense>} />
        <Route path="/amenities" element={<Suspense fallback={<PageLoader />}><PageWrapper><AmenitiesPage /></PageWrapper></Suspense>} />
        <Route path="/location" element={<Suspense fallback={<PageLoader />}><PageWrapper><LocationPage /></PageWrapper></Suspense>} />
        <Route path="/faq" element={<Suspense fallback={<PageLoader />}><PageWrapper><FaqPage /></PageWrapper></Suspense>} />
        <Route path="/inquire" element={<Suspense fallback={<PageLoader />}><PageWrapper><InquirePage /></PageWrapper></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black relative bg-[#FBFBFA] text-[#111111]">
          {/* Global Decorative Background Elements */}
          <div className="fixed -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-black/5 pointer-events-none" />
          <div className="fixed top-1/2 left-0 w-full h-[1px] bg-black/5 pointer-events-none" />

          {/* Vertical Sidebar Deco */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 pointer-events-none hidden md:flex">
            <div className="h-20 w-[1px] bg-black/10" />
            <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.5em] text-black/20 font-medium">
              ESTABLISHED MMXXIV
            </div>
            <div className="h-20 w-[1px] bg-black/10" />
          </div>

          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}
