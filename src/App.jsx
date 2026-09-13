import { useState, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element"

import HeaderContainer from "./components/global/header/HeaderContainer"
import Modals from "./components/global/modals/Modals"

import HomePage from "./components/pages/home-page/HomePage"
import WorkforceSolutionsPage from "./components/pages/workforce-solutions-page/WorkforceSolutionsPage"
import TechConsultingPage from "./components/pages/tech-consulting-page/TechConsultingPage"
import ManagedOperationsPage from "./components/pages/managed-operations-page/ManagedOperationsPage"
import ServicesPage from "./components/ARCHIVE/services-page/ServicesPage"
import BlogPage from "./components/ARCHIVE/blog-page/BlogPage"
import EventsPage from "./components/ARCHIVE/events-page/EventsPage"
import FAQPage from "./components/ARCHIVE/faq-page/FAQPage"
import HelpPage from "./components/ARCHIVE/help-page/HelpPage"

import LogoDivider from "./components/global/dividers/LogoDivider"
import LogoDividerMobile from "./components/global/dividers/LogoDividerMobile"

import Footer from "./components/global/footer/Footer"
import FooterBottom from "./components/global/footer/FooterBottom"
import { LogoDev } from "@mui/icons-material"

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

          {/* <Route path="" element={</>}
          <Route path="" element={</>}
          <Route path="" element={</>}
          <Route path="" element={</>} */}

          <Route path="workforce-solutions" element={<WorkforceSolutionsPage />} />
          <Route path="tech-consulting" element={<TechConsultingPage />} />
          <Route path="managed-operations" element={<ManagedOperationsPage />} />

          <Route path="services" element={<ServicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="help" element={<HelpPage />} />
        </Routes>
        
        {/* <div className="z-99">
          <LogoDivider />
          <LogoDividerMobile />
        </div> */}

        <Footer />
        <FooterBottom />
      </GlobalContext.Provider>
      </div>
    </>
  )
}