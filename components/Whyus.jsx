/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Whyus.module.css"

const Whyus = () => {
  return (
    <div className="container mt-4 pt-4 mb-4 pb-4" id="about">
      <h1 className={styles.header}>Why Quescup?</h1>
      <hr className={styles.hr} />
      <div className="container text-center">
        <p className={styles.para}><strong>QUESCUP is the only platform which prefer to stand with honesty and trust, we support Donors and Campaigners who seek to help.</strong>
        </p>
        <p className={styles.para}>
          <strong>QUESCUP stands with you to solve any query that you may have about crowdfunding.</strong>
        </p>
        <p className={styles.para}><strong>Our goal is to keep away fraudulent people and support those who are actually in need.</strong>
        </p>
      </div>
      <div className="row ml-1 mr-1 mt-4 pt-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/beginner_friendly.svg" alt="" /></div>
          <div className={styles.subheading}>Info about campaigners</div>
          <p className={styles.para}>
            Choosing QUESCUP, you will never doubt about the money that you donated is reached or not to particular campaign.
          </p>
          <p className={styles.para}>
            As, QUESCUP will provide all the required information about the campaigner on particular campaign.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/screen.svg" alt="" /></div>
          <div className={styles.subheading}>Verify Documents</div>
          <p className={styles.para}>
            QUESCUP will reach out to all levels to verify all detailed information and documentation of the campaigner and come up with the best solution.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/hill.svg" alt="" /></div>
          <div className={styles.subheading}>How the donation is used</div>
          <p className={styles.para}>
            QUESCUP assures that all the queries regarding donation will be solved, i.e.,
            <p className={styles.para}>- Is the donated money  used for proper cause</p>
            <p className={styles.para}>- Whether your money is reached to particular campaign </p>
            <p className={styles.para}>- Is the donated money going to the particular person who is really in need of help</p>
          </p>
        </div>
      </div>
      <div className="row ml-1 mr-1  mt-4 pt-4 mb-4 pb-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/people.svg" alt="" /></div>
          <div className={styles.subheading}>Dedicated Campaign Checkers</div>
          <p className={styles.para}>
            QUESCUP personally looks after the query that is raised against any campaigns and ensure that no information is hidden from anyone.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/youtube.svg" alt="" /></div>
          <div className={styles.subheading}>A-Z about Campaigners</div>
          <p className={styles.para}>
            QUESCUP is here to provide all the details about campaigns
            <p className={styles.para} style={{ marginTop: '1%' }}>- Complete details about the campaigner</p>
            <p className={styles.para}>- Whether the campaign is genuine or not</p>
            <p className={styles.para}>- How the campaigner is willing to use the donated money</p>
            <p className={styles.para}>- To know whether the campaign is fake or not</p>
            <p className={styles.para}>Every single detail about it.</p>
            QUESCUP ensure that all your query or any other related queries are solved efficiently and effectively
          </p>

        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/interview.svg" alt="" /></div>
          <div className={styles.subheading}>Support Trusted Campaigns</div>
          <p className={styles.para}>
            QUESCUP only supports those campaign who are actually in need of help and also make sure that the campaigner meets his needs.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Whyus