import LandingFAQ from "../../components/LandingComponent/LandingFAQ"
import LandingHomeSection from "../../components/LandingComponent/LandingHomeSection"

const LandingPage = () => {
  return (
    <div className="Landing-Page-Main-Container">
      <LandingHomeSection />
      <LandingFAQ />
    </div>
  )
}
export default LandingPage