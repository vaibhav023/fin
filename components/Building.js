import React from 'react';
import styles from '@/styles/building.module.css'; // Update the path to your CSS file
import Link from 'next/link';
import Image from 'next/image';


const Building = () => {
    return (
        <div>
            <div className={styles.gridContainer}>
                <h2 style={{fontWeight:"800", fontSize:"150%",paddingBottom:"2%",paddingTop:"1%"}}>Start building today</h2>
                <p style={{ marginLeft: '30%', width: '40%',paddingBottom:"2%" }}>Get in touch to learn how our open banking solution can
                    increase efficiency and speed for your business.</p>
                <div>
                    <Link href="/#Contact" className={styles.submitButton}>
                        Get in touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Building;
