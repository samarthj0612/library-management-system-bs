import React from 'react';
import styles from '@/styles/library.module.css';
import libraryData from '@/data/libraries';

const LibraryPreview = () => {
  console.log(libraryData);
  return (
    <div>
      <div id="library">
        {/* <img className='' src="/img/libraries/img2.jpg" alt="" /> */}
        
        <h4>Library, Bhopal</h4>
      </div>
    </div>
  )
}

export default LibraryPreview