'use client'
import React,{ useState } from 'react';
import styles from '@/styles/main.module.css';
import LibraryPreview from './LibraryPreview';
import "@/styles/style.css";
import Image from 'next/image';
import Link from 'next/link';
import { branches, facilities, toppers } from '../../data/homeData';
import {Franchise} from '../../data/franchise';

const LibraryCard = ({ image, location, route }) => {
  return (
    <Link href={'/libraries/' + route}>
      <div className={styles.branchesCard}>
        <Image src={image} alt={location} width={300} height={300} className={styles.branchesImage} />
        <p className={styles.branchesLocation}>{location}</p>
      </div>
    </Link>
  );
};


const FranchiseLibraryCard = ({ image, location, route }) => {
  return (
    <Link href={'/contact'}>
      <div className={styles.branchesCard}>
        <Image src={image} alt={location} width={300} height={300} className={styles.branchesImage} />
        <p className={styles.branchesLocation}>{location}</p>
      </div>
    </Link>
  );
};

const FacilityComponent = ({ idx, title, description, image, imagePosition }) => {
  return (
    <div className={styles.facilityContainer} style={{ alignSelf: (idx % 2 === 0 ? 'flex-start' : 'flex-end') }}>
      <div className={styles.facilityContent}>
        <h2 className={styles.facilitytitle}>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={`${styles.facilityImage} ${imagePosition === 'left' ? styles.leftImage : styles.rightImage}`}>
        <Image src={image} alt={title} width={150} height={150} />
      </div>
    </div>
  );
};

const TopperCard = ({ name, image, exam, rank, post }) => {
  return (
    <div className={styles.topperCard}>
      <Image src={image} alt={name} width={150} height={150} className={styles.topperImage} />
      <p className={styles.topperName}>{name}</p>
      <p>{exam}</p>
      <p>Rank: {rank}</p>
      <p>Post: {post}</p>
    </div>
  );
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTopperIndex, setCurrentTopperIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, branches.length - 3));
  };

  const handlePrevTopperClick = () => {
    setCurrentTopperIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextTopperClick = () => {
    setCurrentTopperIndex((prevIndex) => Math.min(prevIndex + 1, toppers.length - 6));
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <img className={styles.image} src="/img/libraries/img3.jpg" alt="Library" />
        <h1 className={styles.heading}>Welcome to our Library</h1>
        <h1 className={styles.subHeading}>Turn your Dream into Reality</h1>
      </div>

      <div id='facilities' className={styles.facilitiesHeading}>Our Facilities</div>
      <div className={styles.facilitiesBlocks}>
        {facilities.map((facility, idx) => {
          return (
            <FacilityComponent
              key={idx}
              idx={idx}
              title={facility.title}
              description={facility.description}
              image={facility.image}
              imagePosition={facility.imagePosition}
            />
          )
        })}
      </div>
      <div id='branches' className={styles.branchesContainer}>
        <p className={styles.branchesTitle}>Find us in multiple prime locations to serve you better.</p>
        <div className={styles.carouselContainer}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevClick}>&lt;</button>
          <div
            className={styles.carouselWrapper}
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {branches.map((branch, index) => (
              <LibraryCard key={index} image={branch.image} location={branch.location} route={branch.route} />
            ))}
            {Franchise.map((franchise, index) => (
              <FranchiseLibraryCard key={index} image={franchise.image} location={franchise.location} route={franchise.route} />
            ))}
          </div>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextClick}>&gt;</button>
        </div>
      </div>


      <div className={styles.toppersContainer}>
        <div className={styles.toppersheading}>Congratulations</div>
        <div className={styles.carouselContainer}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrevTopperClick}>&lt;</button>
          <div
            className={styles.carouselWrapper}
            style={{ transform: `translateX(-${currentTopperIndex * (100 / 6)}%)` }}
          >
            {toppers.map((topper, index) => (
              <TopperCard
                key={index}
                name={topper.name}
                image={topper.image}
                exam={topper.exam}
                rank={topper.rank}
                post={topper.post}
              />
            ))}
          </div>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNextTopperClick}>&gt;</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
