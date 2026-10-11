import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Transformation from "./sections/Transformation";
import Services from "./sections/Services";
import Technology from "./sections/Technology";
import Portfolio from "./sections/Portfolio";

const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BusinessHealthCheckup = lazy(
  () => import("./pages/BusinessHealthCheckup")
);
const SoftwareProjectGuide = lazy(
  () => import("./pages/SoftwareProjectGuide")
);
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Careers = lazy(() => import("./pages/Careers"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const Consultation = lazy(() => import("./pages/Consultation"));

function LoadingPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#D4AF37]" />
        <p className="text-sm tracking-wide text-white/60">
          Loading Riyadvi...
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <Transformation />
        <Services />
        <Technology />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <PageLayout>
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Page not found
        </p>

        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
          Lost in the digital space?
        </h1>

        <p className="mb-8 max-w-lg text-white/60">
          The page you are looking for does not exist or may have moved.
        </p>

        <Link
          to="/"
          className="rounded-full bg-[#D4AF37] px-7 py-3 font-semibold text-black transition hover:bg-[#f0d477]"
        >
          Back to Home
        </Link>
      </section>
    </PageLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/services/:slug"
            element={
              <PageLayout>
                <ServiceDetails />
              </PageLayout>
            }
          />

          <Route
            path="/portfolio/:slug"
            element={
              <PageLayout>
                <CaseStudy />
              </PageLayout>
            }
          />

          <Route
            path="/about"
            element={
              <PageLayout>
                <About />
              </PageLayout>
            }
          />

          <Route
            path="/contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />

          <Route
            path="/business-health-checkup"
            element={
              <PageLayout>
                <BusinessHealthCheckup />
              </PageLayout>
            }
          />

          <Route
            path="/software-project-planning-guide"
            element={
              <PageLayout>
                <SoftwareProjectGuide />
              </PageLayout>
            }
          />

          <Route
            path="/consultation"
            element={
              <PageLayout>
                <Consultation />
              </PageLayout>
            }
          />

          <Route
            path="/blog"
            element={
              <PageLayout>
                <Blog />
              </PageLayout>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <PageLayout>
                <BlogPost />
              </PageLayout>
            }
          />

          <Route
            path="/careers"
            element={
              <PageLayout>
                <Careers />
              </PageLayout>
            }
          />

          <Route
            path="/careers/:slug"
            element={
              <PageLayout>
                <JobDetails />
              </PageLayout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;