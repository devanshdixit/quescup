/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Howitworks.module.css"

const HowItWorks = () => {
    return (
        <div style={{ backgroundColor: "#FCFCFC" }} id="">
            <div className="container mt-4 pt-4 mb-4 pb-4">
                <h1 className={styles.header}>Our Plans</h1>
                <hr className={styles.hr} />
                <div className="row mt-4 pt-4">
                    <div className={styles.trio}>
                        <div className="col-md-4">
                            <div className={styles.card}>
                                <div className={styles.subheader}>Free and open for all</div>
                                <div className={styles.cardheader}>levelZero</div>
                                <div className="text">
                                    <ul className="list">
                                        <li className="list-item">Start to know about campaigns information</li>
                                        <li className="list-item">How they are spending the money </li>
                                        <li className="list-item">Whether they can be trsuted or not</li>
                                    </ul>
                                </div>
                                <div className="card-arrow" style={{marginTop:"50%",maxHeight:"50px"}}>
                                    <span className="text">Learn More</span>
                                    <img src="/images/arrow.svg" alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.card}>
                                <div className={styles.subheader}>focused group</div>
                                <div className={styles.cardheader}>levelOne</div>
                                <div className="text">
                                    <ul className="list">
                                        <li className="list-item">Background check on the company</li>
                                        <li className="list-item">Verify Documents</li>
                                        <li className="list-item">Start to know about campaigns information</li>
                                        <li className="list-item">How they are spending the money </li>
                                        <li className="list-item">Whether they can be trsuted or not</li>
                                    </ul>
                                </div>
                                <div className="card-arrow" style={{marginTop:"40%",maxHeight:"50px"}}>
                                <span className="text">Learn More</span>
                                <img src="/images/arrow.svg" alt="arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.card}>
                                <div className={styles.subheader}>Donation Assistance</div>
                                <div className={styles.cardheader}>Let us handle your Donations</div>
                                <div className="text">
                                    <ul className="list">
                                        <li className="list-item">Background check on the company</li>
                                        <li className="list-item">Personal Assistant while donating</li>
                                        <li className="list-item">Doing physical checks on campaigns</li>
                                        <li className="list-item">Verify Documents</li>
                                        <li className="list-item">Start to know about campaigns information</li>
                                        <li className="list-item">How they are spending the money </li>
                                        <li className="list-item">Whether they can be trsuted or not</li>
                                    </ul>
                                </div>
                                <div className="card-arrow" style={{marginTop:"10%",maxHeight:"50px"}}>
                                    <span className="text">Learn More</span>
                                    <img src="/images/arrow.svg" alt="arrow" />
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