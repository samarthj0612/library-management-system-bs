import React from 'react'
import styles from '@/styles/main.module.css'
import LibraryPreview from './LibraryPreview'

const HomePage = () => {
  return (
    <>
    <div className={styles.main}>
      <div id={styles.left}> 
        <h2>DREAM LIBRARY</h2><br />
        <p>Library Management System is designed in such a way that it keeps the functioning of the library smooth and in order. It is user-friendly software. It helps in keeping track of the books, catalogues, magazines, etc. <br /> This system increases the efficiency of the librarian and better management of the library. It leads to an easy search of the desired book from the library.</p><br /><br />
        <button id={styles.getStartedBtn}>Get Started</button>
      </div>
      <div id={styles.right}>
        {/* <img src="../img1.png" alt="Image" /> */}
      </div>
    </div>
    <LibraryPreview />
    </>
  )
}

export default HomePage