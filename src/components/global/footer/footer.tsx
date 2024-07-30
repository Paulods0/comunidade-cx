import Logo from "../logo"
import Container from "../container"
import FooterContent from "./footer-content"
import { HEADER_LINKS } from "@/constants/header-content"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full bg-black py-12">
      <Container className="flex flex-col">
        <div className="grid gap-4 grid-cols-3 lg:grid-cols-5">
          <Image
            width={500}
            height={500}
            alt="logo-white"
            className=" w-24 h-28 lg:w-20 lg:h-10 object-cover"
            src="/logo/logo-cx-white.png"
          />
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
