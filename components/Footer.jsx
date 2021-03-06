/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.css"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className={styles.footercontainermain} style={{ backgroundColor: "#0D3344" }}>
            <div className="mt-4 pt-4 text-white">
                <div className="container mt-4 ">
                    <div className="text-center">
                        <h1>Join our community</h1>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-3 mb-3">
                        <div className="p-2"><a target="_" href="https://www.facebook.com/quescup.india"><img src="/images/social/facebook.png" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><a target="_" href="https://www.instagram.com/p/CO7I-3IBMio/?utm_medium=copy_link"><img src="/images/social/instagram.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><a target="_" href="https://www.linkedin.com/in/quescup-india-00aa0621a/"><img src="/images/social/linkedin.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        {/* <div className="p-2"><img src="/images/social/telegram.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></div> */}
                        <div className="p-2"><a target="_" href="https://twitter.com/quescup?s=08"><img src="/images/social/twitter.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                        <div className="p-2"><a target="_" href="https://www.youtube.com/channel/UC1XrtV8O1OI6nQcmmCnr33w"><img src="/images/social/youtube.svg" style={{ width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center pb-4 pt-4 mt-3 mb-3">
                        <div className="p-2 ml-3"><Link href="/terms">Terms & Condition</Link></div>
                        <div className="p-2 " style={{ marginLeft: "40px", marginRight: "40px" }}><Link href="/privacy">Privacy Policy</Link></div>
                        <div className="p-2 mr-3"><Link href="/guidelines">Community Guidelines</Link></div>
                    </div>
                </div>
                <div className="container-fluid " style={{ backgroundColor: "#052634" }}>
                    <div className="text-center mt-4 pt-4 pb-4">@Quescup. All rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer