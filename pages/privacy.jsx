import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Navbar"
import PrivacyPolicy from "../components/PrivacyPolicy"

const Privacy = () => {
    return (
        <div>
            <Head>
                <title>Privacy Policy | Quescup</title>
                <meta
                    name="description"
                    content="Securing donors ny verify donation campaign"
                />
                <link rel="icon" href="/images/logo.png" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            <PrivacyPolicy />
            <Footer />
        </div>
    )
}
export default Privacy