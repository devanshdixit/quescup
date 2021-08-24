/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Howitworks.module.css"

const WhatWeProvide = () => {
    return (
        <div className="container mt-4 pt-4 mb-4 pb-4" id="services" >
        <h1 className={styles.header}>What we provide</h1>
        <hr className={styles.hr} />
        <div className="row ml-1 mr-1 mt-4 pt-4">
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To know complete details about the campaigners</div>
          </div>
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To know whether the campaign is fake or not</div>
          </div>
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To know the many which is donated is reahed to particular campaign</div>
          </div>
        </div>
        <div className="row ml-1 mr-1  mt-4 pt-4 mb-4 pb-4">
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To verify all the valid documents.</div>
          </div>
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To know whether the campaign is still active</div>
          </div>
          <div className="col-md-4 mt-4">
            <div className={styles.heading}>To do physical checks on campaigners</div>
          </div>
        </div>
      </div>
    )
}
export default WhatWeProvide