import styles from '@/styles/footer.module.css'
import { FaMobileAlt, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { MdHome, MdLibraryBooks, MdGavel, MdContactMail } from 'react-icons/md';

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Dream Library</h3>
          <p className={styles.text}>
            A hub of knowledge and learning with multiple branches strategically
            located for your convenience. Our library offers an extensive collection
            of books, digital resources, and multimedia materials to cater to diverse
            interests and age groups.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.list}>
            <li  className={styles.contactItem}><a href="/#home"><MdHome className={styles.icon}  /> Home</a></li>
            <li  className={styles.contactItem}><a href="/#facilities"><MdLibraryBooks className={styles.icon} /> Facilities</a></li>
            <li  className={styles.contactItem}><a href="#"><MdGavel className={styles.icon} /> Rules and Regulations</a></li>
            <li  className={styles.contactItem}><a href="/contact"><MdContactMail className={styles.icon} /> Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Connect Us</h3>
          <div className={styles.contactItem}><FaMobileAlt className={styles.icon} /> Mobile: 9685130085</div>
          <div className={styles.contactItem}><FaWhatsapp className={styles.icon} /> WhatsApp: 9685130085</div>
          <div className={styles.contactItem}><FaInstagram className={styles.icon} /> Instagram: dreamlibrary1123</div>
          <div className={styles.contactItem}><FaEnvelope className={styles.icon} /> Email: dreamlibrary1123@gmail.com</div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Dream Library. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default footer;
