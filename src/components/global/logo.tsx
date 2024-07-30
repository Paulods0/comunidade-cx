import Image from "next/image"

const Logo = () => {
  return (
    <Image
      width={500}
      height={500}
      alt="logotipo"
      src="/cxpa-logo.webp"
      className="object-cover w-24 h-32"
    />
  )
}

export default Logo
