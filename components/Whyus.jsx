/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Whyus.module.css"

const Whyus = () => {
  return (
    <div className="container mt-4 pt-4 mb-4 pb-4" id="about">
      <h1 className={styles.header}>Why Quecup?</h1>
      <hr className={styles.hr} />
      <div className="row ml-1 mr-1 mt-4 pt-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/beginner_friendly.svg" alt="" /></div>
          <div className={styles.subheading}>Info about campaigners</div>
          <p className={styles.para}>
            You have <strong>never donated a single rupee</strong>. No problem, we got you covered.
            Start with<strong>Quescup</strong>. Quescup is for donors who are in doubt of campaigns.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/screen.svg" alt="" /></div>
          <div className={styles.subheading}>Verify Documents</div>
          <p className={styles.para}>
            Had any doubts about campaigns, tell us about that and 
            we would dig up their documents and tell you whether they are legit or not 
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/hill.svg" alt="" /></div>
          <div className={styles.subheading}>How the donation is used</div>
          <p className={styles.para}>
            We will go to full extent to know how your hard earned money
            is spent and whether it goes to where it is promised or in someones bnakaccount.
          </p>
        </div>
      </div>
      <div className="row ml-1 mr-1  mt-4 pt-4 mb-4 pb-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/people.svg" alt="" /></div>
          <div className={styles.subheading}>Dedicated Campaign Checkers</div>
          <p className={styles.para}>
            We are here and we are here with a team that digs deep on that campaign
            and show what is being hidden from you.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/youtube.svg" alt="" /></div>
          <div className={styles.subheading}>A-Z about Campaigners</div>
          <p className={styles.para}>
            From start to end, we will let you know what it is all about, when they started,
            when 
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/interview.svg" alt="" /></div>
          <div className={styles.subheading}>Promote Trusted Campaigns</div>
          <p className={styles.para}>
            We are the people who respect your trust and we are going to de anything 
            to let you trust us no matter what.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Whyus