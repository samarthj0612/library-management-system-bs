"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/forgotPassword.module.css';

const ForgetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const ResetPassword = () => {
        if (newPassword.length < 6 || confirmPassword.length < 6) {
            setMessage('Passwords should be at least 6 characters long. Please try again.');
        } else if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match. Please try again.');
        } else {
            setMessage('Password reset successfully!');
        }
    };

    return (
        <div className={styles.forgetContainer}>
            <p className={styles.forgetStyle}>Reset Your Password</p>
            <div className={styles.forgetFlex}>
                <div className={styles.forgetInputGroup}>
                    <p>New Password</p>
                    <div className={styles.passwordInputContainer}>
                        <input
                            type={newPasswordVisible ? 'text' : 'password'}
                            className={styles.forgetPasswordInput}
                            placeholder="Enter new password"
                            minLength="6"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <span onClick={() => setNewPasswordVisible(!newPasswordVisible)} className={styles.forgetEyeIcon}>
                            <FontAwesomeIcon icon={newPasswordVisible ? faEye : faEyeSlash} />
                        </span>
                    </div>
                    <p className={styles.forgetType}>(minimum 6 characters in length)</p>
                </div>

                <div className={styles.forgetInputGroup}>
                    <p>Confirm New Password</p>
                    <div className={styles.passwordInputContainer}>
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            className={styles.forgetPasswordInput}
                            placeholder="Confirm new password"
                            minLength="6"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} className={styles.forgetEyeIcon}>
                            <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash} />
                        </span>
                    </div>
                    <p className={styles.forgetType}>(minimum 6 characters in length)</p>
                </div>
            </div>

            <div className={styles.forgetButtonContainer}>
                <button className={styles.forgetResetButton} onClick={ResetPassword}>Reset Password</button>
            </div>

            {message && (
                <div>
                    <p className={message.startsWith('Passwords') ? styles.errorMessage : styles.successMessage}>
                        {message}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ForgetPassword;
