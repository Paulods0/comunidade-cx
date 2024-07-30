import Image from "next/image"
import React from "react"

type Props = {
  image: string
  link: string
  title: string
}

const FollowButton = ({ title, link, image }: Props) => {
  return (
    <a href={link} className="flex flex-col items-center gap-3">
      <Image
        className="object-contain size-20"
        src={image}
        width={500}
        height={500}
        alt="imagem-social-media"
      />
      <span className="text-xl text-white font-medium bg-blue-600 px-1">{title}</span>
    </a>
  )
}

export default FollowButton
