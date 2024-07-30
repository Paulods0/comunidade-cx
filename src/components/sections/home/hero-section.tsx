import Image from "next/image"
import Link from "next/link"
import LinkButton from "../../button/link-button"

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-end w-full h-screen">
      <video
        className="absolute inset-0 w-full object-cover h-full"
        loop
        autoPlay
        muted
      >
        <source src="/video/hero-vid.mp4" />
      </video>
      <div className="absolute inset-0 bg-purple-600/20 w-full h-full" />

      <div className="z-10 px-8 lg:px-0 w-full lg:w-[35vw] h-full gap-12 lg:mt-[4vh] lg:mr-[3vw] flex flex-col items-start justify-center">
        <div className="text-2xl md:text-[1.7rem] text-white font-thin">
          <p className="w-fit bg-blue-500">O nosso propósito é reunir</p>
          <p className="w-fit bg-blue-500">profissionais para discutir e</p>
          <p className="w-fit bg-blue-500">trocar conhecimentos sobre</p>
          <p className="w-fit bg-blue-500">Experiência e tudo que</p>
          <p className="w-fit bg-blue-500">o mercado de Gestão da</p>
          <p className="w-fit bg-blue-500">estiver ligado a felicidade e</p>
          <p className="w-fit bg-blue-500">sucesso do cliente.</p>
        </div>

        <div className="flex w-full lg:w-[28vw]">
          <p className="text-sm text-white font-thin">
            Acreditamos muito no aprendizado colaborativo e por isso nasceu a
            Comunidade Amigos do CX.
            <br />
            Promovemos várias iniciativas para fortalecer e avançar a aplicação
            das boas práticas de Gestão de Experiência no Brasil e no Mundo.
          </p>
        </div>

        <LinkButton text="Faça parte!" style="uppercase" />
      </div>
    </section>
  )
}

export default HeroSection
