'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import libraryData from '../../../data/libraries'
import LoadingSkeleton from '@/app/_components/LoadingSkeleton'
import styles from '@/styles/library.module.css'
import Link from 'next/link'

const Library = () => {
  const params = useParams();
  const slug = params.library; // Access the dynamic segment named 'library'

  const [data, setData] = useState({})

  useEffect(() => {
    if (slug)
      setData(libraryData[slug]);
  }, [])


  return (
    <div>
      {data ? (
        <div className={styles.container}>
          <h1 className={styles.heading}>DREAM LIBRARY</h1>
          <div className={styles.locationNameStyle}>{data.name}</div>
          <div className={styles.addressStyle}><strong>Address: </strong>{data.address}</div>
          <div className={styles.mapContainer}>
            <iframe
              className={styles.map}
              src={data.location}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.totalSeats}>Total Seats:{data.totalSeats}</div>
          <div className={styles.availableSeats}>Available Seats</div>

          
             
           <h2 className={styles.plan}>Choose your right plan</h2>
            <div className={styles.planBlock}>
              <h2 className={styles.pheading}>FEES STRUCTURE</h2>
              <h2 className={styles.psubheading1}>FULL TIME:</h2>

              <div className={styles.tableContainer}>
              <table className={styles.feesTable}>
                <thead>
                  <tr>
                    <th>Months</th>
                    <th>Non-Reserved</th>
                    <th>Reserved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 MONTH</td>
                    <td>600</td>
                    <td>700</td>
                  </tr>
                  <tr>
                    <td>2 MONTHS</td>
                    <td>1100</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td>3 MONTHS</td>
                    <td>1500</td>
                    <td>1800</td>
                  </tr>
                </tbody>
              </table>
            </div>


            <h2 className={styles.psubheading1}>PART TIME:</h2>
              <div className={styles.tableContainer}>
              <table className={styles.feesTable}>
                <thead>
                  <tr>
                    <th>Months</th>
                    <th>Non-Reserved</th>
                    <th>Reserved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 MONTH</td>
                    <td>400</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>2 MONTHS</td>
                    <td>750</td>
                    <td>950</td>
                  </tr>
                  <tr>
                    <td>3 MONTHS</td>
                    <td>1100</td>
                    <td>1400</td>
                  </tr>
                </tbody>
              </table>
            </div>

             <div className={styles.additionalInfo}>
              <h3 className={styles.additionalInfoHeading}>Additional Information</h3>
              <div className={styles.Info}>
              <p><strong>Reserved Seat (₹100 Extra):</strong></p>
              <ul>
                <li>Full-Time: If you pay an extra ₹100, you can reserve a seat and leave your belongings at the desk.</li>
                <li>Part-Time: If you pay an extra ₹100, you will get a specific allocated seat for your shift, but belongings must be taken along.</li>
              </ul>
              <p><strong>Non-Reserved Seat (No Extra Cost):</strong></p>
              <ul>
                <li>Full-Time: You will need to take your belongings with you, you can use any available seat.</li>
                <li>Part-Time: You can use any available seat during your shift.</li>
              </ul>
              <p><strong>Shifts Details for Part-Time Plan</strong></p>
              <ul>
                <li>First Shift: 7 AM - 3 PM</li>
                <li>Second Shift: 3 PM - 11 PM</li>
              </ul>
              </div>
            </div>
          </div>

          <div className={styles.timingBlock}>
            <h2 className={styles.timingStyle}>Timings</h2>
            <div className={styles.timingInsideBlock}>Monday-Sunday <strong>(07:00 am-11:00 pm)</strong></div>
            <div className={styles.timingsMessage}>Our library is open every day from 7:00 AM to 11:00 PM, including Sundays and holidays.
            </div>
            </div>
            <Link href={'/registration'}>


            <div className={styles.servicesBlock}>
            <div className={styles.service}>
              <h3 className={styles.serviceHeading}>ROOM</h3>
              <p>Comfortable rooms available for students.</p>
              <p>Contact: 123-456-7890</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.serviceHeading}>TIFFIN</h3>
              <p>Healthy tiffin services at affordable prices.</p>
              <p>Contact: 098-765-4321</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.serviceHeading}>HOME TUTOR</h3>
              <p>Experienced tutors for personalized learning.</p>
              <p>Contact: 456-789-0123</p>
            </div>
            <div className={styles.service}>
              <h3 className={styles.serviceHeading}>DONATE BOOK</h3>
              <p>Donate books and spread knowledge.</p>
              <p>Contact: 789-012-3456</p>
            </div>
          </div>

        <button className={styles.b}>ENROLL NOW</button>
        </Link>
        
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  )
}

export default Library
