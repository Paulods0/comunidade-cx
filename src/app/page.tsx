"use client"

import Text from "@/components/text"
import LinkButton from "@/components/link-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg.png')] bg-center bg-cover bg-fixed py-10 font-Poppins relative bg-white flex items-center w-full px-2 lg:px-0">
      <div className="w-full lg:w-[820px] z-20 mx-auto p-6 text-[#111] h-full flex flex-col gap-4">
        <h1 className="lg:text-3xl text-2xl text-left lg:text-center font-semibold">
          A Comunidade
          <span className="bg-clip-text mx-2 text-transparent bg-gradient-to-r from-pink-500 to-blue-700">
            Amigos do CX
          </span>
          chegou à Angola.
        </h1>
        <Text
          line
          index={0}
          text="É com grande entusiasmo que lançamos a comunidade 'Amigos do CX Angola' Esta iniciativa é uma extensão dos bem-sucedidos Amigos do CX Brasil, dedicada a todos os profissionais apaixonados por Customer Experience."
        />
        <Text
          line
          index={1}
          text="Estendemos um convite especial a todos os profissionais de marketing,
          gestores de projetos, gestores de contas, vendas e todos que trabalham
          com atendimento ao cliente para se juntarem a nós neste movimento de
          excelência em experiência do cliente!"
        />
        <Text
          line
          index={2}
          text="Queremos destacar a Daniela Fantinati como a líder do projeto em
          Angola, uma profissional de excelência com mais de 15 anos de
          experiência em Customer Experience."
        />
        <Text
          line
          index={3}
          text="Agradecemos profundamente ao fundador do Amigos do CX, Bruno Guimarães
          , e à comunidade mãe Amigos do CX | CXPA Brazil Network por inspirarem
          esta jornada."
        />
        <Text
          index={4}
          text="Junte-se a nós para partilhar conhecimentos, experiências e promover
          práticas inovadoras em Customer Experience!"
        />

        <LinkButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBb_jvPNOJQSgDz07RBxHEcRZ5Dy_YTkNgCB1IHfiaJcvt-Q/viewform"
          text="comunidade amigos do cx"
          image="/arrow.png"
        />
        <LinkButton href="https://lnkd.in/dbVm5F4j" image="/instagram.png" />
      </div>
    </main>
  )
}
