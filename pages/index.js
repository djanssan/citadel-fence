// /Users/admin/Desktop/fence-final/pages/index.js
import ContactForm from "../components/ContactForm"
import Offers from "../components/Offers" // Import Offers component
import Plan from "../components/Plan" // Import Plan component
import TopBar from "../components/TopBar"

export default function Home() {
  return (
    <TopBar title="Home">
      <Plan /> {/* Include Plan component */}
      <Offers /> {/* Include Offers component */}
      <ContactForm />
    </TopBar>
  )
}
