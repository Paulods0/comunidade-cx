import Container from "../container"
import Navbar from "./navbar"
import Logo from "../logo"
import MobileMenu from "@/components/mobile-menu/mobile.-menu"

const Header = () => {
  return (
    <header className="w-full pt-2">
      <Container className="flex items-center lg:items-start justify-between lg:justify-normal lg:flex-col">
        <Logo />
        <Navbar />
        <MobileMenu />
      </Container>
    </header>
  )
}

export default Header
