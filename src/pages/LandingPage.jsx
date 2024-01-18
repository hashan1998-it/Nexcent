import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function LandingPage() {
    return (
        <div className="h-svh">
            <Navbar />
            <Sidebar />
            <Hero/>
        </div>
    )
}

export default LandingPage