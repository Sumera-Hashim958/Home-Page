import image from "next/image"
import Header from "./components/Header/header"
import HeroSection from "./components/HeroSection/herosection"
import Footer from "./components/Footer/footer"


function Home () {
  return(
    // <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/car-1-pic.jpeg')"}}>
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Footer></Footer>
      <section className="green">
      {/* <h1>welcome my homepage</h1> */}
      </section>
    </div>
   
        

  )
}

export default Home