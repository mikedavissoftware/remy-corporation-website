

import HeaderNew from "./HeaderNew"
import HeaderMobile from "./HeaderMobile"

export default function HeaderContainer({ setContactOpen }) {



  return (
    <div className="" >
      <HeaderNew setContactOpen={setContactOpen} />
      <HeaderMobile setContactOpen={setContactOpen} />
    </div>
  )
}