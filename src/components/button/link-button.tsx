import Link from "next/link"
import React, { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  text: string
  link?: string
  style?: string
} & HTMLAttributes<HTMLAnchorElement>

const LinkButton = ({ style, text, link, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      href={link ?? "#"}
      className={twMerge(
        "w-40 p-3 flex items-center justify-center h-12 hover:scale-[0.92] transition-all duration-200 bg-purple-600 ease-in-out rounded-lg text-white tracking-widest text-[0.70rem] font-semibold",
        style
      )}
    >
      {text}
    </Link>
  )
}

export default LinkButton
