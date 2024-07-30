import Logo from "../logo"
import Container from "../container"
import FooterContent from "./footer-content"
import { HEADER_LINKS } from "@/constants/header-content"

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12">
      <Container className="flex flex-col">
        <div className="grid grid-cols-5">
          <Logo />
          {HEADER_LINKS.map((link, index) => (
            <FooterContent
              key={index}
              title={link.label}
              children={link.children}
            />
          ))}
        </div>

        <div>2023 amigos do cx</div>
      </Container>
    </footer>
  )
}

export default Footer
