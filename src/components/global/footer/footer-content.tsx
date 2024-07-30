import React from "react"
import Link from "next/link"
import { DropdownProps } from "../header/drop-down"

type FooterContentProps = {
  title: string
} & DropdownProps

const FooterContent = ({ title, children }: FooterContentProps) => {
  return (
    <div className="flex flex-col text-white items-start">
      <h1 className="uppercase underline text-sm">{title}</h1>
      <ul className="flex flex-col">
        {children &&
          children.map((link, index) => (
            <li key={index}>
              <Link className="font-thin text-sm" href={link.link}>
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FooterContent
