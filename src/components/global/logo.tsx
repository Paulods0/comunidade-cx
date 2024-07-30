import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src="/logo/logo-cx.png"
      width={500}
      height={500}
      alt="logotipo"
      className="object-cover w-20 h-24 md:w-24 md:h-32"
    />
  )
}

export default Logo
