import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element"

import Header from "./components/Header"
import ContactFormModal from "./components/ContactFormModal"
import HomePage from "./components/home-page/HomePage"
import ServicesPage from "./components/services-page/ServicesPage"
import BlogPage from "./components/blog-page/BlogPage"
import EventsPage from "./components/events-page/EventsPage"
import ContactPage from "./components/contact-page/ContactPage"
import FAQPage from "./components/faq-page/FAQPage"
import HelpPage from "./components/help-page/HelpPage"
import Footer from "./components/Footer"


export default function App() {

  const [contactOpen, setContactOpen] = useState(true)

  return (
    <>
      <div className="App">
        <ScrollToHashElement behavior="smooth" />

        <Header setContactOpen={setContactOpen} />

        <ContactFormModal contactOpen={contactOpen} />

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