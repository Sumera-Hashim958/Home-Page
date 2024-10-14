import styles from "./header.module.css"
import React from 'react'

const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.aside}>
            <div className={styles.logo}>
                <a href="#"><span>SHMA</span>Cars</a>
            </div>
            </div>
<nav className={styles.container}>
    {/* <h1>My HomePage</h1> */}
    <ul className={styles.navlist}>
        <li><a href="#" className={styles.home}></a>Home</li>
        <li><a href="#" className={styles.about}></a>Cars</li>
        <li><a href="#" className={styles.contact}></a>Accessories</li>
    </ul>
</nav>
</header>
  )
}

export default Header
