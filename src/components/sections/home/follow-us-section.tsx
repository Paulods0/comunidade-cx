import FollowButton from "@/components/follow-button"
import Container from "@/components/global/container"

const FollowUsSection = () => {
  return (
    <div className="mt-20 pt-20 pb-32 flex flex-col items-start justify-center gap-12 bg-[url('/bg-yellow.png')] w-full bg-center bg-no-repeat bg-cover min-h-[25vh]">
      <Container>
        <p className="w-fit text-white text-4xl bg-blue-600 tracking-wider font-bold uppercase">
          Siga-nos nas redes sociais
        </p>
      </Container>

      <div className="w-full flex items-center justify-around">
        <FollowButton title="linkedin" link="#" image="/icons/linkedin.png" />
        <FollowButton title="instagram" link="#" image="/icons/instagram.png" />
        <FollowButton title="whatsapp" link="#" image="/icons/whatsapp.png" />
      </div>
    </div>
  )
}

export default FollowUsSection
