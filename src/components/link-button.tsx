import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
  image: string
  text?: string
  href: string
}

const LinkButton = (props: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className="w-full p-[2px] h-12 text-center rounded-full bg-gradient-to-b from-pink-600 to-blue-600 flex items-center justify-center"
    >
      <a
        href={props.href}
        className="w-full h-full relative flex items-center gap-4 uppercase justify-center rounded-full bg-white"
      >
        <p className="font-semibold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent text-sm lg:text-base mr-8 lg:mr-0">
          {props.text}
        </p>

        <Image
          src={props.image}
          alt="seta-icon"
          width={50}
          height={50}
          className={`${
            props.text
              ? "size-6 md:size-8 absolute right-8 lg:right-12"
              : "md:size-8 size-6"
          }`}
        />
      </a>
    </motion.div>
  )
}

export default LinkButton
