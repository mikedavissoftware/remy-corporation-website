import { Routes, Route } from "react-router-dom"

import './App.css'

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import ServicesPage from "./components/services-page/ServicesPage"
import BlogPage from "./components/blog-page/BlogPage"
import EventsPage from "./components/events-page/EventsPage"
import ContactPage from "./components/contact-page/ContactPage"
import FAQPage from "./components/faq-page/FAQPage"
import HelpPage from "./components/help-page/HelpPage"
import Footer from "./components/Footer"


export default function App() {

  return (
    <>
      <div className="App">

        <Header />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="help" element={<HelpPage />} />
        </Routes>

        <Footer />

      </div>
    </>
  )
}