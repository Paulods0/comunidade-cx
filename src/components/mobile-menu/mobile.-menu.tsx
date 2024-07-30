import React from "react"
import { Menu } from "lucide-react"

const MobileMenu = () => {
  return (
    <button className="text-purple-500 inline-block lg:hidden">
      <Menu size={40} />
    </button>
  )
}

export default MobileMenu
