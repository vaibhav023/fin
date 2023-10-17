import React from 'react';
import styles from "@/styles/servicesection.module.css"
import Link from "next/link";
import Image from "next/image";


const Servicesection = () => {
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
                        Services
                    </p>
                </div>
            </div>
            <div  style={{ backgroundColor: '#DFD1F4', alignItems: 'center', justifyContent: 'center',marginLeft:"5%",marginRight:"5%", borderRadius:"2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%',paddingTop:'4%',fontWeight:"700",fontSize:"200%" }}>
                    Fastest &amp; Secure
                </h2>

                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>With the fastest &amp; secure tech platform, we offer merchants to process transactions with us at high speed and security.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/Service 6.1.png" alt="About1.jpg" width="130%" height="220%"></img>
                    </div>
                </div>
            </div>
            <div  style={{ backgroundColor: '#FFEBCC',alignItems: 'center', justifyContent: 'center',marginLeft:"5%",marginRight:"5%", borderRadius:"2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%',paddingTop:"4%",fontWeight:"700",fontSize:"200%"  }}>
                    Quick Onboard
                </h2>

                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>We offer quick signup &amp; provide merchants credentials in real time. Post sign up merchants can do test transactions on our Sandbox environment and can go live within one hour.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/Service 5.5.png" alt="Notebook.jpg" width="130%" height="220%" ></img>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#DFF3F6',  alignItems: 'center', justifyContent: 'center',marginLeft:"5%",marginRight:"5%", borderRadius:"2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%',paddingTop:"4%",fontWeight:"700",fontSize:"200%"  }}>
                    Best Analytics
                </h2>

                <div className={styles.gridSingle} >
                    <div className={styles.leftGrid3}>
                        <p>We offer best analytics &amp; automations for merchants; they can just login into their account and can visualise these in real time.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="images/websiteimages/Service 4.4.png" alt="Rectangle1.jpg" width="130%" height="220%" ></img>
                    </div>
                </div>
            </div>
            <div  style={{ backgroundColor: '#DFD1F4', alignItems: 'center', justifyContent: 'center' ,marginLeft:"5%",marginRight:"5%", borderRadius:"2%"}}>
                <h2 style={{ textAlign: 'center', marginTop: '3%' ,paddingTop:"5%",fontWeight:"700",fontSize:"200%" }}>
                    Real Time Payments
                </h2>

                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>We have the fastest UPI transactions platform in the market and settlement is on a real time basis.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="images/Mobile1.png" alt="Mobile1.jpg" width="130%" height="220%"></img>
                    </div>
                </div>
            </div>
            <div  style={{ backgroundColor: '#FFEBCC', alignItems: 'center', justifyContent: 'center',marginLeft:"5%",marginRight:"5%", borderRadius:"2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%',paddingTop:"4%",fontWeight:"700",fontSize:"200%"  }}>
                    Easy Integrations
                </h2>

                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>We offer super easy integrations with minimum params to pass for transaction processing &amp; confirmation.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="images/Coin_Mobile.png" alt="Coin_Mobile.jpg" width="130%" height="220%"></img>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#DFF3F6', alignItems: 'center', justifyContent: 'center',marginLeft:"5%",marginRight:"5%", borderRadius:"2%" }}>
                <h2 style={{ textAlign: 'center', marginTop: '3%', paddingTop:"4%" ,fontWeight:"700",fontSize:"200%" }}>
                    AI Driven Analytics
                </h2>

                <div className={styles.gridSingle}>
                    <div className={styles.leftGrid3}>
                        <p>With our AI driven analytics models, we can provide forecasts of trends to merchants based on their transactional patterns.</p>
                    </div>

                    <div className={styles.rightGrid3}>
                        <img src="/images/AIimage.png" alt="AIimage.jpg" width="80%" height="130%" ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicesection;
