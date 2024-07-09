import styles from "@/styles/header.module.css"


const Header = () => {
    return (<>

        <header className={styles.header1}></header>
        <header className={styles.header2}>
        <div className={styles.headerContent}>
               
            <div className={styles.libraryName}><h3>Dream Library</h3></div>
                <div className={styles.contactInfo}>
                    <div><img className={styles.img1} src="/img/libraries/img4.jpg" />9685130085</div>
                    <div><img className={styles.img1} src="/img/libraries/img5.jpg" />dreamlibrary1123@gmail.com</div>
                    <div><img className={styles.img1} src="/img/libraries/img6.jpg" />07:00 AM-11:00 PM</div> 
                    
               
                </div>              
            </div>
        </header>

        

    </>
    )

}
export default Header;