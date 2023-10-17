import React from 'react';
import styles from '@/styles/about.module.css'; // Update the path to your CSS file
import Link from 'next/link';
import Image from 'next/image';



const About = () => {
    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src="images/Services.jpg" alt="Services" width="100%" height="50%" />
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: '35%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '3%',
                        borderRadius: '2%',
                    }}
                >
                    <p style={{ textAlign: "center", fontSize: '400%', fontWeight: 'bold', color: 'white', marginTop: "10%" }}>
                        About Us
                    </p>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.leftGrid2} >
                    <img src="images/wheel2.png" alt="mobile_photo.jpg" width="70%" height="80%" style={{ marginLeft: '12%', marginTop: "2%" }} />
                </div>
                <div className={styles.rightGrid2} style={{ backgroundColor: "#DFD1F4" }}>
                    <div className={styles.gridText}>
                        <h2 style={{fontWeight:"700",fontSize:"200%"}}><br />Vision</h2><br />
                        <p>We aim to simplify the process of building a successful, sustainable online business making it accessible and hassle-free for all using our platform.</p>
                    </div>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.leftGrid_opp} style={{ backgroundColor: "#FFEBCC" }}>
                    <div className={styles.gridText}>
                        <h2 style={{fontWeight:"700",fontSize:"200%",fontWeight:"700",fontSize:"200%"}}><br />Mission</h2><br />
                        <p>Our mission is to become the brain of the transaction industry to revolutionize and simplify by providing a tech-driven, one-stop solution for all payment needs.</p>
                    </div>
                </div>
                <div className={styles.rightGrid_opp} >
                    <img src="images/mission2.png" alt="mobile_photo.jpg" width="70%" height="85%" style={{ marginLeft: "12%", marginTop: "2%" }} />
                </div>
            </div>
            <div style={{ backgroundColor: '#DFF3F6', alignItems: 'center', justifyContent: 'center', marginLeft: "5%", marginRight: "5%", borderRadius: "2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%', paddingTop: "4%" ,fontWeight:"700",fontSize:"200%"}}>Make Your Payments</h2>
                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <p>We are a financial infrastructure platform for businesses catering from SMBs to enterprises.</p>
                        <p>We help merchants to accept payments, grow their revenue, and accelerate new business opportunities. Headquartered in Gurgaon, India, the company aims to increase the GDP of the internet.</p>
                    </div>
                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/About 1.png" alt="about12.jpg" width="300%" height="300%" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#DFD1F4', alignItems: 'center', justifyContent: 'center', marginLeft: "5%", marginRight: "5%", borderRadius: "2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%', paddingTop: "4%" ,fontWeight:"700",fontSize:"200%", fontWeight:"700",fontSize:"200%"}}>We Serve All Businesses</h2>
                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>From well-established companies to startups, FinixPe helps to accept payments, grow their revenue, and accelerate new business opportunities.</p>
                    </div>
                    <div className={styles.rightGrid3}>
                        <img src="images/aboutcopy.svg" alt="about22" width="400%" height="400%" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#FFEBCC', alignItems: 'center', justifyContent: 'center', marginLeft: "5%", marginRight: "5%", borderRadius: "2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%', paddingTop: "4%",fontWeight:"700",fontSize:"200%",fontWeight:"700",fontSize:"200%" }}>We Have-Fastest TAT</h2>
                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>We offer super easy integrations with a minimum number of parameters to pass for transaction processing &amp; confirmation. With our platform, we collaborate with numerous businesses and brands, delivering limitless transactions sourcing with the fastest turnaround settlement time and in a very short time frame.</p>
                    </div>
                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/About 2.2.png" alt="about22" width="400%" height="400%" />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#DFF3F6', alignItems: 'center', justifyContent: 'center', marginLeft: "5%", marginRight: "5%", borderRadius: "2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%', paddingTop: "4%",fontWeight:"700",fontSize:"200%",fontWeight:"700",fontSize:"200%" }}>No Limit On Transactions</h2>
                <div className={styles.gridSingle} >
                    <div className={styles.leftGrid3}>
                        <p>We can scale business to any fold in transactions.</p>
                        <p>Operating at 50 thousand tps on average and can scale up to no limits.</p>
                    </div>
                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/About 3.png" alt="about22" width="130%" height="220%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
