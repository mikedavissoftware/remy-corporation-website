import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Header from "./Header"
import HeaderMobile from "./HeaderMobile"

import { GlobalContext } from "../../../App"

export default function HeaderContainer() {

  const { scrollToSection } = useContext(GlobalContext)

  return (
    <div className="" >
      <Header scrollToSection={scrollToSection} />
      <HeaderMobile scrollToSection={scrollToSection} />
    </div>
  )
}