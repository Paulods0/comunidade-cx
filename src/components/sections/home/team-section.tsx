import LinkButton from "../../button/link-button"
import TeamCard from "./team-card"

const TeamSection = () => {
  return (
    <section className="py-6 w-full px-8 flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl uppercase my-6 text-white font-bold bg-blue-500 tracking-widest">
        Conheça a equipa
      </h1>
      <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <TeamCard
            key={i}
            image="/woman.jpg"
            name="Ana Maria"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea saepe in, ratione aperiam dignissimos nulla suscipit et impedit debitis excepturi ipsa maxime fuga, sed tempora? Libero, totam? Excepturi, expedita.s"
          />
        ))}
      </div>
    </section>
  )
}

export default TeamSection
