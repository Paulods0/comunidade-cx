import LinkButton from "@/components/button/link-button"
import Image from "next/image"
import React from "react"

type Props = {
  image: string
  name: string
  description: string
}

const TeamCard = ({ description, image, name }: Props) => {
  return (
    <div className="h-auto bg-yellow-400 p-8 flex flex-col items-center justify-between lg:gap-0 gap-10">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={image}
            width={500}
            height={500}
            alt="imagem"
            className="size-44 bg-black"
          />
          <h3 className="text-blue-700 uppercase text-xl font-bold">{name}</h3>
        </div>

        <p className="text-black text-sm text-center font-thin line-clamp-6">
          {description}
        </p>
      </div>

      <LinkButton text="Saiba mais!" style="mt-4 text-base bg-blue-600" />
    </div>
  )
}

export default TeamCard
