import image from "next/image"
import styles from "./herosection.module.css"


function Home () {
  return(
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/car-1-pic.jpeg')"}}>
      <section className={styles.mainContainer}>
        <p>BEST<span>CAR DEALER</span>IN TOWN</p>
      <h2>Find Your Perfect Car</h2>
            </section>
                </div>
   
        

  )
}

export default Home