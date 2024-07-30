import Container from "../container"
import Navbar from "./navbar"
import Logo from "../logo"

const Header = () => {
  return (
    <header className="w-full pt-2">
      <Container className="flex flex-col">
        <Logo />
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
