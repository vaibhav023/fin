import React from 'react';
import styles from '@/styles/footer.module.css'; // Update the path to your CSS file
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className={styles.gridContainer}>
                <div className={styles.leftGrid}>
                    <Image src="/images/logo.png" alt="logo" width={170} height={50} style={{paddingBottom:"3%"}}/>
                    <p style={{ fontSize: '10px' }}>
                        FinixPe is a financial infrastructure platform for businesses. From well established companies to startups FinixPe helps to accept payments, grow their revenue, and accelerate new business opportunities.
                    </p>
                </div>
                <div className={styles.rightGrid}>
                    <h2 style={{fontWeight:"900", paddingBottom:" 15%",paddingTop:"15%",fontSize:"150%"}}>Company</h2>
                    <div className={styles.termGroup} style={{ display: "flex" }}>
                        <div className={styles.term}>
                            <Link href="/" prefetch={false}>
                                <h4 style={{ color: "white" }}>Home</h4>
                            </Link>
                        </div>
                        <div className={styles.term}>
                            <Link href="/about" prefetch={false}><h4 style={{ color: "white" }}>About</h4></Link>
                        </div>
                    </div>
                    <div className={styles.termGroup} style={{ display: "flex" }}>
                        <div className={styles.term} style={{ color: "red" }} ><Link href="/process" prefetch={false}> <h4 style={{ color: "white" }}>Process</h4></Link></div>
                        <div className={styles.term}><Link href="/services" prefetch={false}><h4 style={{ color: "white" }}>Services</h4></Link></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row ">
            <div className={styles.newGrid} style={{marginLeft:"3%"}}>
                <div style={{ display: "flex", alignItems: "center",marginLeft:"25%"  }}>
                    <span style={{fontSize: "12px" ,color:"white"}}>© 2023 Finix Pe </span>
                    <div className={styles.iconContainer}>
                        {/* You can add your social media icons here */}
                    </div>
                </div>
            </div>
            <div className={styles.newGrid}>
                <div style={{ display: "flex", alignItems: "center", marginLeft:"20%" }}>
                    <span style={{ fontSize: "12px" ,color:"white"}}>Email: ashish@finixpe.com </span>
                    <div className={styles.iconContainer}>
                        {/* You can add your social media icons here */}
                    </div>
                </div>
            </div>
            <div className={styles.newGrid} style={{marginRight:"3%"}}>
                <div style={{ display: "flex", alignItems: "center", marginLeft:"20%"}}>
                    <span style={{ fontSize: "12px" ,color:"white"}}>Mobile No: +91 9599736876 </span>
                    <div className={styles.iconContainer}>
                        {/* You can add your social media icons here */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
