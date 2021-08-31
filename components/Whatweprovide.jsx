/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Howitworks.module.css"

const WhatWeProvide = () => {
  return (
    <div className="container mt-4 pt-4 mb-4 pb-4" id="services" >
      <h1 className={styles.header}>How we Serve</h1>
      <hr className={styles.hr} />
      <div className="container">
        <p className={styles.para}>
          <strong>There are 6 STEPS:</strong>
        </p>
      </div>
      <div className="row ml-1 mr-1 mt-0 pt-0">
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>1. Investigation of query</div>
        </div>
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>2. Getting in Touch with crowdfunding platform</div>
        </div>
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>3. Collecting Information </div>
        </div>
      </div>
      <div className="row ml-1 mr-1  mt-4 pt-4 mb-4 pb-4">
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>4. Visiting Campaigner</div>
        </div>
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>5. Verification as per the information</div>
        </div>
        <div className="col-md-4 mt-4">
          <div className={styles.heading}>6. Conclusion to the query </div>
        </div>
      </div>
    </div>
  )
}
export default WhatWeProvide