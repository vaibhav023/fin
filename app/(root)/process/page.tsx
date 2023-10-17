import styles from '@/styles/processes.module.css';
import Link from "next/link";
import Image from "next/image";
// import 'src/app/globals.css'

import React from 'react';

const Processes = () => {
  return (
    <div style={{position: "relative"}}>
  <img src="/images/Services.jpg" alt="Services" width="1550" height="380" />
  <div
    style={{
      position: 'absolute',
      top: '10%', /* Adjust the top value as needed to position the text */
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '10px',
      borderRadius: '5px',
      // background: 'rgba(0, 0, 0, 0.7)', /* Add a background color for better visibility */
      color: 'white',
      textAlign: 'center', /* Center-align text horizontally */
    }}
  >
    <p style={{ margin: '0', fontSize: '40px', fontWeight: 'bold' }}>
      Process
    </p>
  </div>


      <div className={styles.wrapper}>
        <p style={{ marginBottom: '-1%', fontSize: '250%', fontWeight: '800', textAlign: 'center', padding: '6%', marginTop: '5%' }}>How It Works?</p>
        <div className={styles.container}>

          {/* Left Column */}
          <div className={styles.leftColumn} style={{ marginTop: '0%' }}>
            {/* Pair 1 */}
            <div className={styles.textContent}>
              <p style={{ fontSize: '150%', fontWeight: '800', marginBottom: "1%", marginTop: '-20%',padding:"1%"}}>Merchant profiling and requirements:</p>
              <p>Merchants come to us &amp; get onboarded with their details.</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/websiteimages/image 127_1.png" alt="Step 2" height="130%" width="130%" />
            </div>

            {/* Pair 2 */}
            <div className={styles.textContent}>
              <p style={{ fontSize: '150%', fontWeight: '800', marginBottom: '-1%' }}>Providing testing &amp; Prod credentials:</p>
              <p>We provide testing secret key &amp; salt values post verifications.</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/websiteimages/image 128.png" alt="Step 2" height="130%" width="130%" />
            </div>
            <div className={styles.textContent}>
              <p style={{ fontSize: '150%', fontWeight: '800', marginBottom: '-1%' }}>Merchant analytics and settlement :</p>
              <p>On the dashboard provided to merchants, they can see their settlement and other trends.</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className={styles.middleSection} >
            {/* Pair 1 */}
            <div className={styles.textContent}>
              <p className="h1-bold" >01</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/dotted.png" alt="Step 2" height="5%" width="15%" />
            </div>

            {/* Pair 2 */}
            <div className={styles.textContent}>
            <p className="h1-bold" >02</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/dotted.png" alt="Step 2" height="5%" width="15%" />
            </div>
            <div className={styles.textContent}>
            <p className="h1-bold" >03</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/dotted.png" alt="Step 2" height="5%" width="15%" />
            </div>
            <div className={styles.textContent}>
            <p className="h1-bold" >04</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/dotted.png" alt="Step 2" height="15%" width="20%" />
            </div>
            <div className={styles.textContent}>
            <p className="h1-bold" >05</p>
            </div>
            <div className={styles.imageContent}>
              <img src="/images/dotted.png" alt="Step 2" height="5%" width="15%" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Pair 1 */}
            <div className={styles.imageContent} >
              <img src="images/websiteimages/image 124_1.png" alt="Step 5" height="130%" width="130%"></img>
            </div>
            <div className={styles.textContent}>
              <p style={{ fontSize: '150%', fontWeight: '800', marginBottom: '-1%' }}>Providing Merchant credentials (for sign up &amp; see the dashboard):</p>
              <p>We provide login credentials post onboarding them</p>
            </div>

            {/* Pair 2 */}
            <div className={styles.imageContent}>
              <img src="images//websiteimages/image 125_1.png" alt="Step 5" height="130%" width="130%"></img>
            </div>
            <div className={styles.textContent}>
              <p style={{ fontSize: '150%', fontWeight: '800', marginBottom: '-1%' }}>Transaction gets started &amp; Merchant can see in their dashboard :</p>
              <p>Once merchant does the testing transactions, they can move on prod just to change the pointing url.</p>
            </div>
            <div className={styles.imageContent}>
              <img src="images/websiteimages/image 126.png" alt="Step 5" height="130%" width="130%"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processes;
