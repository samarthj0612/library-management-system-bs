import styles from "@/styles/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}></div>
            <div className={styles.headerContent}>
                <div className={styles.libraryName}><h3>Dream Library</h3></div>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}><img className={styles.icon} src="/img/libraries/img4.jpg" alt="Phone" />9685130085</div>
                    <div className={styles.contactItem}><img className={styles.icon} src="/img/libraries/img5.jpg" alt="Email" />dreamlibrary1123@gmail.com</div>
                    <div className={styles.contactItem}><img className={styles.icon} src="/img/libraries/img6.jpg" alt="Hours" />07:00 AM-11:00 PM</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
