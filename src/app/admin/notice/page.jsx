'use client';

import React, { useState } from 'react';
import Layout from '../page';

const Notice = () => {
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/admin/addNotice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, message }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Failed to schedule notice: ${data.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Layout>
      <div className='notice-box'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date" style={{ color: "black" }}>Date:</label>
            <input
              type="date"
              id='date'
              style={{ border: '2px solid black' }}
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className='input-2'>
            <input
              type="text"
              placeholder='Write message here'
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <button className='noticeButton' type="submit">Save</button>
        </form>
      </div>
    </Layout>
  );
}

export default Notice;
