"use client";

import React, { useState } from 'react';
import styles from '@/styles/registration.module.css';
import libraryData from '../../data/libraries';
// import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    aadhaarNo: '',
    presentAddress: '',
    branchLocation: '',
    schoolingMedium: '',
    twelfthPercentage: '',
    examCount: '',
    preparingFor: '',
    previousLibraryDetails: '',
    // profileImageUpload: null,
    password: '',
    email: '',
    emergencyContactNo: '',
    dateOfBirth: '',
    permanentAddress: '',
    tenthPercentage: '',
    graduationDegree: '',
    seatNo: '',
    // aadhaarUpload: null,
    confirmPassword: ''
  });

  const [error, setError] = useState(null); // To handle error messages
  const [loading, setLoading] = useState(false); 

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log("Type", type)
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }
  //   try {
  //     const formDataToSubmit = new FormData();
  //     for (const key in formData) {
  //       formDataToSubmit.append(key, formData[key]);
  //     }
      
  //     // Debug: Log the FormData entries to the console
  //     for (let pair of formDataToSubmit.entries()) {
  //       console.log(pair[0]+ ', ' + pair[1]); 
  //     }
  
  //     const response = await fetch('http://localhost:3001/auth/register', {
  //       method: 'POST',
  //       body: formDataToSubmit,
  //     });
  
  //     console.log("response", response)

  //     if (response.ok) {
  //       alert('Registration successful');
  //       router.push('/login');
  //     } else {
  //       const errorData = await response.json();
  //       console.log("In error")
  //       console.log("Error", errorData.message )
  //       alert(errorData.message || 'Registration failed');
  //     }
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     alert('Registration failed. Please check your details and try again.');
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful registration
        router.push('/success'); // Redirect to a success page
      } else {
        // Handle errors
        setError(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setError('Network error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.heading}>Student Registration</h1>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          {/* ... your form fields ... */}
          <div className={styles.formGroup}>
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              id="Name"
              name="name"
              // required
              value={formData.name}
              onChange={handleChange}
              />
  
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                // required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
  
              <label htmlFor="aadhaarNo">Aadhaar Card No.:</label>
              <input
                type="text"
                id="aadhaarNo"
                name="aadhaarNo"
                value={formData.aadhaarNo}
                onChange={handleChange}
              />
  
              <label htmlFor="presentAddress">Present Address:</label>
              <textarea
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
              ></textarea>
  
              <label htmlFor="branchLocation">Branch location:</label>
              <select
                id="branchLocation"
                name="branchLocation"
                value={formData.branchLocation}
                onChange={handleChange}
              >
                {Object.keys(libraryData).map(key => (
                  <option key={key} value={libraryData[key].name}>
                    {libraryData[key].name}
                  </option>
                ))}
              </select>
  
              <label htmlFor="schoolingMedium">Schooling Medium:</label>
              <input
                type="text"
                id="schoolingMedium"
                name="schoolingMedium"
                value={formData.schoolingMedium}
                onChange={handleChange}
              />
  
              <label htmlFor="twelfthPercentage">12th Class Percentage:</label>
              <input
                type="text"
                id="twelfthPercentage"
                name="twelfthPercentage"
                value={formData.twelfthPercentage}
                onChange={handleChange}
              />
  
              <label htmlFor="examCount">How many competitive exams have you cleared?</label>
              <input
                type="number"
                id="examCount"
                name="examCount"
                value={formData.examCount}
                onChange={handleChange}
              />
  
              <label htmlFor="preparingFor">Preparing for which exam:</label>
              <input
                type="text"
                id="preparingFor"
                name="preparingFor"
                value={formData.preparingFor}
                onChange={handleChange}
              />
  
              <label htmlFor="previousLibraryDetails">If you are a working employee then add some details about your job and position :</label>
              <textarea
                id="previousLibraryDetails"
                name="previousLibraryDetails"
                value={formData.previousLibraryDetails}
                onChange={handleChange}
              ></textarea>
{/*   
              <label htmlFor="profileImageUpload">Upload Profile Image:</label>
              <input
                type="file"
                id="profileImageUpload"
                name="profileImageUpload"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
              /> */}
  
              <label htmlFor="password">Create Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                minLength="8"
                // required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
  
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                // required
                value={formData.email}
                onChange={handleChange}
              />
  
              <label htmlFor="emergencyContactNo">Emergency Contact No.:</label>
              <input
                type="tel"
                id="emergencyContactNo"
                name="emergencyContactNo"
                value={formData.emergencyContactNo}
                onChange={handleChange}
              />
  
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                // required
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
  
              <label htmlFor="permanentAddress">Permanent Address:</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
              ></textarea>
  
              <label htmlFor="tenthPercentage">10th Class Percentage:</label>
              <input
                type="text"
                id="tenthPercentage"
                name="tenthPercentage"
                value={formData.tenthPercentage}
                onChange={handleChange}
              />
  
              <label htmlFor="graduationDegree">Graduation Degree:</label>
              <input
                type="text"
                id="graduationDegree"
                name="graduationDegree"
                value={formData.graduationDegree}
                onChange={handleChange}
              />
  
              <label htmlFor="examCount">How many competitive exams have you appeared?</label>
              <input
                type="number"
                id="examCount"
                name="examCount"
                value={formData.examCount}
                onChange={handleChange}
              />
  
              <label htmlFor="seatNo">Enter your Reserved Seat No.:</label>
              <p className={styles.para}>If your plan type is reserved, please select a seat number.</p>
              <input
                type="text"
                id="seatNo"
                name="seatNo"
                value={formData.seatNo}
                onChange={handleChange}
              />
  
              <label htmlFor="previousLibraryDetails">Previous Library Details:</label>
              <textarea
                id="previousLibraryDetails"
                name="previousLibraryDetails"
                value={formData.previousLibraryDetails}
                onChange={handleChange}
              ></textarea>
  
              {/* <label htmlFor="aadhaarUpload">Upload Aadhaar Card:</label>
              <input
                type="file"
                id="aadhaarUpload"
                name="aadhaarUpload"
                accept=".jpg, .jpeg, .png"
                onChange={handleChange}
              /> */}
  
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                minLength="8"
                // required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
  
            <div className={styles.additionalInfo}>
              <div className={styles.instruction}>Follow the given instruction *</div>
              <div className={styles.checkboxContainer}>
                <label htmlFor="followRules">
                  <input
                    type="checkbox"
                    id="followRules"
                    name="followRules"
                    // required
                  />
                  I always follow the rules and regulations of the Library and never do any sort of misbehavior with Staff members.
                </label>
              </div>
              <button className={styles.button} type="submit">Proceed to Payment</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegistrationForm;
  