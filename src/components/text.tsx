"use client"

import { motion } from "framer-motion"

type Props = { text: string; line?: boolean; index: number }

const Text = (props: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.index * 0.02, duration: 0.3 }}
      className={`text-lg leading-relaxed tracking-wide py-3 ${
        props.line ? "border-b-[0.5px]" : null
      }`}
    >
      {props.text}
    </motion.p>
  )
}

export default Text
