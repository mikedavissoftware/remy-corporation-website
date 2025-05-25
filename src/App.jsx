import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element"

import HeaderNew from "./components/HeaderNew"
import HeaderMobile from "./components/HeaderMobile"
import HeaderContainer from "./components/HeaderContainer"
import ContactFormModal from "./components/ContactFormModal"
import HomePage from "./components/home-page/HomePage"
import ServicesPage from "./components/services-page/ServicesPage"
import BlogPage from "./components/blog-page/BlogPage"
import EventsPage from "./components/events-page/EventsPage"
import FAQPage from "./components/faq-page/FAQPage"
import HelpPage from "./components/help-page/HelpPage"
import Footer from "./components/Footer"
import FooterBottom from "./components/FooterBottom"


export default function App() {

  const [contactOpen, setContactOpen] = useState(true)

  

  return (
    <>
      <div className="App">
        <ScrollToHashElement behavior="smooth" />

        <HeaderContainer setContactOpen={setContactOpen} />

        <ContactFormModal contactOpen={contactOpen} />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="help" element={<HelpPage />} />
        </Routes>
        

        <Footer />
        <FooterBottom />
      </div>
    </>
  )
}