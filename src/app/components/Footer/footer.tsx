import styles from "./footer.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />

import React from 'react'

const footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <h1>Hello@SHMAcars.com</h1>
      <p>SHMAcars - Excellence in Motion. Follow us on social media for the latest updates.</p>
            <ul className={styles.iconsStyle}>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href="./" className={styles.navList}><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="./" className={styles.navList}><i className="fa fa-briefcase"></i></a></li>
            </ul>
    </footer>
    
  )
}
export default footer
