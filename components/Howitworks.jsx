/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Howitworks.module.css"

const HowItWorks = () => {
    return (
        <div  style={{ backgroundColor: "#FCFCFC" }}>
        <div className="container mt-4 pt-4 mb-4 pb-4">
            <h1 className={styles.header}>Why Quecup?</h1>
            <hr className={styles.hr} />
            <div className="row mt-4 pt-4">
                <div className={styles.trio}>
                    <div className="col-md-4">
                        <div className={styles.card}>
                            <div className={styles.subheader}>Free and open for all</div>
                            <div className={styles.cardheader}>levelZero</div>
                            <div className="text">
                                <ul className="list">
                                    <li className="list-item">Start your developer journey here.</li>
                                    <li className="list-item">Make 8 mini-apps and host them.</li>
                                    <li className="list-item">Learn basic HTML, CSS, vanillaJS, Git, Github, React basics as well.</li>
                                </ul>
                            </div>
                            <div className="card-arrow">
                                <span className="text">Learn More</span>
                                <img src="/images/arrow.svg" alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.card}>
                            <div className={styles.subheader}>Closed focused group</div>
                            <div className={styles.cardheader}>levelOne</div>
                            <div className="text">
                                <ul className="list">
                                    <li className="list-item">Live classes on Zoom.</li>
                                    <li className="list-item">An intermediate level, 6 months of structured learning.</li>
                                    <li className="list-item">Learn Advanced React, React Ecosystem, and more.</li>
                                    <li className="list-item">Create 10 apps to showcase your learning.</li>
                                    <li className="list-item">Learn to make your app full stack with ExpressJS + Database, Auth.</li>
                                    <li className="list-item">Get interview-ready with advanced JS, CSS, and Typescript.</li>
                                </ul>
                            </div>
                            <div className="card-arrow"></div>
                            <span className="text">Learn More</span>
                            <img src="/images/arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                <div className="col-md-4">
                    <div className={styles.card}>
                    <div className={styles.subheader}>Job placement Assistance</div>
                        <div className={styles.cardheader}>Get Placed</div>
                        <div className="text">
                            <ul className="list">
                                <li className="list-item">You complete levelOne with advanced-level projects.</li>
                                <li className="list-item">You can directly apply to our hiring partner, roc8.careers with these projects.</li>
                                <li className="list-item">roc8.careers will groom you further for interviews.</li>
                                <li className="list-item">Interview through hiring partners and get a job!</li>
                            </ul>
                        </div>
                        <div className="card-arrow">
                            <span className="text">Learn More</span>
                            <img src="/images/arrow.svg" alt="arrow"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default HowItWorks