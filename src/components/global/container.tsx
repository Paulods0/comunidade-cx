import React from "react"
import { twMerge } from "tailwind-merge"
type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge("w-full px-8 md:px-0 mx-auto md:w-[70vw]", className)}
    >
      {children}
    </div>
  )
}

export default Container
