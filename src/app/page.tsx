import HeroSection from "@/components/sections/home/hero-section"
import TeamSection from "@/components/sections/home/team-section"
import FollowUsSection from "@/components/sections/home/follow-us-section"

export default function Home() {
  return (
    <main className="relative w-full flex flex-col">
      <HeroSection />
      <TeamSection />
      <FollowUsSection />
    </main>
  )
}
