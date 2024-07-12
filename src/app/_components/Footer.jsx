import styles from '@/styles/footer.module.css'


const footer=() =>{
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Dream Library</h3>
          <p className={styles.text}>
            A hub of knowledge and learning with multiple branches strategically
            located for your convenience.<br />Our library offers an extensive collection
            of books, digital resources, and multimedia materials to cater to diverse
            interests and age groups.
          </p>       
        </div>

        <div className={styles.column}>
          <h3>Connect with Us</h3>
          <p><img src="/img/libraries/img4.jpg" alt="Mobile" className={styles.img} />Mobile: 9685130085</p>
          <p><img src="/img/libraries/img19.jpg" alt="WhatsApp" className={styles.img} />WhatsApp: 9685130085</p>
          <p><img src="/img/libraries/img20.jpg" alt="Instagram" className={styles.img} />Instagram: dreamlibrary1123</p>
          <p><img src="/img/libraries/img5.jpg" alt="Email" className={styles.img} />Email: dreamlibrary1123@gmail.com</p>
        </div>


        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Facilities</a></li>
            <li><a href="">Rules and Regulation</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
       
        </div>
      </footer>
      
    )
}
export default footer;