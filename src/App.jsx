import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element"

import HeaderContainer from "./components/header/HeaderContainer"
import Modals from "./components/modals/Modals"
import HomePage from "./components/home-page/HomePage"
import ServicesPage from "./components/services-page/ServicesPage"
import BlogPage from "./components/blog-page/BlogPage"
import EventsPage from "./components/events-page/EventsPage"
import FAQPage from "./components/faq-page/FAQPage"
import HelpPage from "./components/help-page/HelpPage"
import Footer from "./components/footer/Footer"
import FooterBottom from "./components/footer/FooterBottom"

export const GlobalContext = createContext()



export default function App() {

  const [currentModal, setCurrentModal] = useState("")

  return (
    <>
      <div className="App">
      <GlobalContext.Provider value={{currentModal, setCurrentModal}}>
        <ScrollToHashElement behavior="smooth" />

        <HeaderContainer />

        <Modals />

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
      </GlobalContext.Provider>
      </div>
    </>
  )
}