import Link from "next/link"
import React from "react"

type ChildrenProps = {
  label: string
  link: string
}

export type DropdownProps = {
  children?: ChildrenProps[]
}

const DropDownMenu = ({ children }: DropdownProps) => {
  return (
    <div className="absolute z-10 items-center flex-col top-7 left-0 w-full py-1 hidden group-hover:flex">
      {children?.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          className={`${
            index === children.length - 1 ? "" : "border-b"
          } w-full  bg-indigo-500 font-bold text-sm transition-all text-white text-center py-1 duration-300 hover:bg-purple-500 hover:text-yellow-500`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default DropDownMenu
