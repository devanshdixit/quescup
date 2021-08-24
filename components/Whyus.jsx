/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Whyus.module.css"

const Whyus = () => {
  return (
    <div className="container mt-4 pt-4 mb-4 pb-4" id="about">
      <h1 className={styles.header}>Why Quecup?</h1>
      <hr className={styles.hr} />
      <div className="container">
        <p className={styles.para}><strong>Quescup is a free service website for all donors & Campaigners who come to seek
          help and want to know the basic details of campaigners.</strong>
        </p>
        <p className={styles.para}><strong>Quescup will not only provide free service but also be there to solve any questions
          you may have about campaignes. Our main goal is to provide service.</strong>
        </p>
      </div>
      <div className="row ml-1 mr-1 mt-4 pt-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/beginner_friendly.svg" alt="" /></div>
          <div className={styles.subheading}>Info about campaigners</div>
          <p className={styles.para}>
            Choosing Quescup you will never doubt about the money you donated is reached or not to particular campaign,
            reached or not to particular campaign, because Quescup will provide all basic details about thecampaigner on required campaign.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/screen.svg" alt="" /></div>
          <div className={styles.subheading}>Verify Documents</div>
          <p className={styles.para}>
            Have any queries? we will solve it Quescup will verify all the documents and
            come up with best solution.(provide with the best solution/need).
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/hill.svg" alt="" /></div>
          <div className={styles.subheading}>How the donation is used</div>
          <p className={styles.para}>
           We will go to our atmost to know how your hard earned money is spent, whether your
           money is reached to particular campaign.
          </p>
          <p className={styles.para}>Is your money giving to the particular person who is really in need.
            Quescup will take care of all those things in details.
          </p>
        </div>
      </div>
      <div className="row ml-1 mr-1  mt-4 pt-4 mb-4 pb-4">
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/people.svg" alt="" /></div>
          <div className={styles.subheading}>Dedicated Campaign Checkers</div>
          <p className={styles.para}>
           We are here to identified with the campaign and know what is being hidden from you.
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/youtube.svg" alt="" /></div>
          <div className={styles.subheading}>A-Z about Campaigners</div>
          <p className={styles.para}>
           Quescup is here to provide all the details about campaigns.
           <p className={styles.para}>- when the campaign is launched.</p>
           <p className={styles.para}>- whether the campaign is still active.</p>
           <p className={styles.para}>- whether the campaign is genuine or not.</p>
           <p className={styles.para}>- when will it end.</p>
           <p className={styles.para}>Every single detail about it.</p>
          </p>
        </div>
        <div className="col-md-4 mt-4">
          <div><img src="/images/whyus/interview.svg" alt="" /></div>
          <div className={styles.subheading}>Promote Trusted Campaigns</div>
          <p className={styles.para}>
            Quescup will also help promote essential campaign that are not getting
            much support from donors and make sure it will happen.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Whyus