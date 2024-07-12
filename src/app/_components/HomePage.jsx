'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/main.module.css';
import LibraryPreview from './LibraryPreview';
import "@/styles/style.css";
import Image from 'next/image';
import Link from 'next/link';

const branches = [
  { route: 'library1', image: '/img/libraries/img7.jpg', location: 'Krishna Nagar Bhopal' },
  { route: 'library2', image: '/img/libraries/img8.jpg', location: 'Gulmohar Bhopal' },
  { route: 'library3', image: '/img/libraries/img9.jpg', location: 'P & T Chouraha' },
  { route: 'library4', image: '/img/libraries/img10.jpg', location: 'Raisen ' },
  { route: 'library5', image: '/img/libraries/img11.jpg', location: 'Bareli' },
  { route: 'library6', image: '/img/libraries/1.jpg', location: 'For Franchise/open new library'},
];


const facilities = [
  {
    
    title: 'Peaceful, Fresh & Energetic environment',
    description: 'Our library offers a peaceful and refreshing environment with plenty of natural light. Enjoy a quiet space that keeps you focused and energized, perfect for studying and relaxation.',
    image: '/img/libraries/img34.jpg',
    imagePosition: 'left'
  },
  {
    title: ' High Speed Wifi',
    description: 'Enjoy seamless internet connectivity with our high-speed WiFi available throughout the library. Our fast and reliable service ensures uninterrupted online research and virtual classes.',
    image: '/img/libraries/img15.jpg',
    imagePosition: 'right'
  }, 

  {
    title: 'Separate Charging Point',
    description: 'Every desk in our library is equipped with a separate charging point, allowing you to easily charge your devices. Our charging points provide easy access without disrupting your workspace.',
    image: '/img/libraries/img13.jpg',
    imagePosition: 'right'
  },
  {
    title: 'Comfortable Chairs ',
    description: 'Our library has ergonomic chairs with excellent lumbar support. Whether for a quick visit or a prolonged study session, our chairs guarantee comfort and concentration.',
    image: '/img/libraries/img31.jpg',
    imagePosition: 'left'
  },
  {  
    title: 'Separate Big Size Cabin',
    description: 'Our library offers spacious, separate cabins for individuals to study in a quiet and private environment. These cabins are designed for comfort and a distraction-free experience.',
    image: '/img/libraries/img12.jpg',
    imagePosition: 'left'
  },
  {
    title: 'Quiet Zones',
    description: 'We have designated quiet zones to ensure a distraction-free environment for focused study. These areas are maintained for silence, providing a peaceful atmosphere for deep concentration.',
    image: '/img/libraries/img18.jpg',
    imagePosition: 'left'
  },
 {
    title: 'Newspapers and Magazines',
    description: 'We provide a wide range of newspapers and magazines, including D.B. and TOI. Our collection includes weekly, monthly, and yearly editions to cater to diverse interests.',
    image: '/img/libraries/img16.jpg',
    imagePosition: 'left'
  },
  
  {
    "title": "Clean Drinking Water",
    "description": "Our library provides clean drinking water to ensure you stay hydrated and refreshed while studying. Easily accessible water stations are available throughout the library.",
    "image": "/img/libraries/img35.jpg",
    "imagePosition": "right"
  },
   {
    title: 'Books Collection',
    description: 'Our extensive books collection includes NCERT textbooks, UPSC & MPPPSC standard books, and materials for other competitive exams. We also offer self-help and motivational books for personal development.',
    image: '/img/libraries/img17.jpg',
    imagePosition: 'right'
  },

  {
    "title": "Power Backup with Inverter",
    "description": "Our library ensures uninterrupted power supply with a reliable backup system and inverter. Study without disruption, even during power outages",
    "image": "/img/libraries/img36.jpg",
    "imagePosition": "left"
  },
  
]


const LibraryCard = ({ image, location, route }) => {
  return (
    <Link href={'/libraries/' + route}>
      <div className={styles.card}>
        <Image src={image} alt={location} width={300} height={300} className={styles.cardImage} />
        <p className={styles.location}>{location}</p>
      </div>
    </Link>
  );
};

const FacilityComponent = ({ idx, title, description, image, imagePosition }) => {
  return (
    <div className={styles.facilityContainer} style={{ alignSelf: (idx % 2 === 0 ? 'flex-start' : 'flex-end') }}>
      <div className={styles.facilityContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={`${styles.facilityImage} ${imagePosition === 'left' ? styles.leftImage : styles.rightImage}`}>
        <Image src={image} alt={title} width={150} height={150} />
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <>
      <div style={{position: "relative"}}>
        <img className={styles.img} src="/img/libraries/img3.jpg" alt="Library" />
        <h1 className={styles.Welcome}>Welcome to our  Library</h1>
        <h1 className={styles.Welcome1}>Turn your Dream into Reality</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.textShadow}>Find us in multiple prime locations to serve you better.</p>
        <div className={styles.cardContainer}>
          {branches.map((branch, index) => (
            <LibraryCard key={index} image={branch.image} location={branch.location} route={branch.route} />
          ))}
        </div>


        <div className={styles.facilities}>Our Facilities</div>
        <div className={styles.facCont} >

          {facilities.map((facility, idx) => {
            return (
              <FacilityComponent
                idx={idx}
                title={facility.title}
                description={facility.description}
                image={facility.image}
                imagePosition={facility.imagePosition}
              />)
          })}

         

        </div>
      </div>
      {/* <LibraryPreview /> */}
    </>
  );
};



export default HomePage;
