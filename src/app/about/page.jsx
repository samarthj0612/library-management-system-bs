import React from 'react';
import styles from '@/styles/registration.module.css';
import libraryData from '../../data/libraries';

const RegistrationForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Student Registration</h1>
        <form className={styles.registrationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="Name">Name:</label>
            <input type="text" id="Name" name="Name" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />

            <label htmlFor="aadhaarNo">Aadhaar Card No.:</label>
            <input type="text" id="aadhaarNo" name="aadhaarNo" />

            <label htmlFor="presentAddress">Present Address:</label>
            <textarea id="presentAddress" name="presentAddress"></textarea>

            <label htmlFor="branchLocation">Branch location:</label>
            <select id="branchLocation" name="branchLocation">
              {Object.keys(libraryData).map(key => (
                <option key={key} value={libraryData[key].name}>
                  {libraryData[key].name}
                </option>
              ))}
            </select>

            <label htmlFor="schoolingMedium">Schooling Medium:</label>
            <input type="text" id="schoolingMedium" name="schoolingMedium" />

            <label htmlFor="twelfthPercentage">12th Class Percentage:</label>
            <input type="text" id="twelfthPercentage" name="twelfthPercentage" />

            <label htmlFor="examCount">How many competitive exams have you cleared?</label>
            <input type="number" id="examCount" name="examCount" />

            <label htmlFor="preparingFor">Preparing for which exam:</label>
            <input type="text" id="preparingFor" name="preparingFor" />

            <label htmlFor="previousLibraryDetails">If you are a working employee then add some details about your job and position :</label>
            <textarea id="previousLibraryDetails" name="previousLibraryDetails"></textarea>

            <label htmlFor="profileImageUpload">Upload Profile Image:</label>
            <input type="file" id="profileImageUpload" name="profileImageUpload" accept=".jpg, .jpeg, .png" />

            <label htmlFor="password">Create Password:</label>
            <input type="password" id="password" name="password" minLength="8" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="emergencyContactNo">Emergency Contact No.:</label>
            <input type="tel" id="emergencyContactNo" name="emergencyContactNo" />

            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required />

            <label htmlFor="permanentAddress">Permanent Address:</label>
            <textarea id="permanentAddress" name="permanentAddress"></textarea>

            <label htmlFor="tenthPercentage">10th Class Percentage:</label>
            <input type="text" id="tenthPercentage" name="tenthPercentage" />

            <label htmlFor="graduationDegree">Graduation Degree:</label>
            <input type="text" id="graduationDegree" name="graduationDegree" />

            <label htmlFor="examCount">How many competitive exams have you appeared?</label>
            <input type="number" id="examCount" name="examCount" />

            <label htmlFor="seatNo">Enter your Reserved Seat No.:</label>
            <p className={styles.para}>If your plan type is reserved, please select a seat number.</p>
            <input type="text" id="seatNo" name="seatNo" />

            <label htmlFor="previousLibraryDetails">Previous Library Details:</label>
            <textarea id="previousLibraryDetails" name="previousLibraryDetails"></textarea>

            <label htmlFor="aadhaarUpload">Upload Aadhaar Card:</label>
            <input type="file" id="aadhaarUpload" name="aadhaarUpload" accept=".jpg, .jpeg, .png" />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" minLength="8" required />
          </div>
        </form>


        <div className={styles.additionalInfo}>
          <div className={styles.instruction}>Follow the given instruction *</div>
          <div className={styles.checkboxContainer}>
            <label htmlFor="followRules">
              <input type="checkbox" id="followRules" name="followRules" required />
                I always follow the rules and regulations of the Library and never do any sort of misbehavior with Staff members.
            </label>
          </div>
          <button className={styles.button}>Proceed to Payment</button>
        </div>

      </div>

    </div>
  );
};

export default RegistrationForm;
