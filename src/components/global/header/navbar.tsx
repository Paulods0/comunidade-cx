import { HEADER_LINKS } from "@/constants/header-content"
import Link from "next/link"
import DropDownMenu from "./drop-down"

const Navbar = () => {
  return (
    <nav className="mt-4">
      <div className="w-full flex items-center">
        {HEADER_LINKS.map((link, index) => (
          <div
            key={index}
            className="relative px-8 py-1 h-7 flex group items-center flex-1 border-r justify-center font-bold text-sm flex-col tracking-widest text-white uppercase bg-indigo-500 transition-all duration-300 hover:text-yellow-400 hover:bg-purple-500"
          >
            <Link href={link.link ? link.link : "#"}>{link.label}</Link>
            {link.children && <DropDownMenu children={link?.children} />}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
