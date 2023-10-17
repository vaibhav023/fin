"use client";
import React, { useState } from 'react';
import styles from '@/styles/contact.module.css';


function contact() {
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.Name.value,
      email: e.target.Email.value,
      turnover: e.target.Turnover.value,
      heardAbout: e.target.HeardAbout.value,
      idea: e.target.Idea.value,
      phone: e.target.Phone.value,
      brandName: e.target.BrandName.value,
      country: e.target.Country.value,
      requirements: e.target.Requirements.value,
     
    }
    const response = await fetch('/api/Contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setMessage("Message sent successfully");
    } else {
      setMessage("Message failed to send");
    }
  }

  return (
    <div className={styles.container}>
      <h2 style={{fontWeight:"700",fontSize:"200%",padding:"4%"}}>Contact Us</h2>
      {message && <p className={message === "Message sent successfully" ? styles.successMessage : styles.errorMessage}>{message}</p>}
      <form onSubmit={handleSubmit} encType="text/plain">
        <div className={styles.columns}>
          <div className={styles.column}>
            {/* Inputs for the first column */}
            <input type="text" name="Name" placeholder="Your Name" required/>
            <input type="text" name="Email" placeholder="Email" required/>
            <input type="text" name="Turnover" placeholder="Brand Monthly Turnover" />
            <input type="text" name="Idea" placeholder="Let&apos;s talk about your idea" />
            <input type="text" name="HeardAbout" placeholder="Where did you hear about us" />
          </div>
          <div className={styles.column} style={{marginBottom:"0%"}}>
            {/* Inputs for the second column */}
            <input type="text" name="Phone" placeholder="Contact Phone" required/>
            <input type="text" name="BrandName" placeholder="Brand Name/Website" required/>
            <input type="text" name="Country" placeholder="Country" />
            <input type="text" name="Requirements" placeholder="Any specific requirements" />
            <input type="text" name="Payment product" placeholder="Which payment product you're looking" />
            {/* File Upload */}
  
            <div>
             
            </div>
          </div>
        </div>
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default contact;
