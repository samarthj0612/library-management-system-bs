import styles from '@/styles/contact.module.css';

const Contact = () => {
  const contactDetails = [
    { src: '/img/libraries/img22.jpg', text: '9685130085' },
    { src: '/img/libraries/img23.jpg', text: '9685130085' },
    { src: '/img/libraries/img24.jpg', text: 'dreamlibrary1123@gmail.com' },
    { src: '/img/libraries/img25.jpg', text: '@dreamlibrary1123' },
    { src: '/img/libraries/img26.jpg', text: 'telegram' },
  ];

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.heading}>Contact</div>
        <p className={styles.para}>
          Join our library community where we support your journey towards success with resources, a supportive environment, and collaborative opportunities. Let's work together to help you reach your academic and personal goals.
        </p>
      </div>

      <div className={styles.formMapContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.formHeading}>Dream Library Contact Form</h2>
          <img className={styles.bookImage} src="/img/libraries/img21.jpg" alt="Book" />
          <p className={styles.description}>
            Submit your issues/suggestions through our contact form and let us help find the answers you need. Your success is our priority.
          </p>
          <form className={styles.contactForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3756106.436314701!2d77.45450564449658!3d23.16754688230706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdream%20library!5e0!3m2!1sen!2sin!4v1720088645469!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.contactDetailsContainer}>
          {contactDetails.map((detail, index) => (
            <div key={index} className={styles.contactDetail}>
              <img src={detail.src} alt="Detail" className={styles.contactImage} />
              <div className={styles.contactInfo}>
                <p>{detail.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
