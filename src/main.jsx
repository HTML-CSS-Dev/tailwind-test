import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import Header from "./components/Header/header";
import Main from "./components/Main/_main";
import ExpertiseSection from "./components/Section/expertise_section";
import ServiceSection from "./components/Section/service_section";
import TestiomonialSection from './components/Section/testimonials_section';
import BlogSection from './components/Section/blog_section';
import Footer from "./components/Footer/footer";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Main />
      <ExpertiseSection />
      <ServiceSection />
      <TestiomonialSection />
      <BlogSection />
      <Footer />
  </StrictMode>,
)