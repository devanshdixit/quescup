import Head from "next/head";
import Footer from "../components/Footer";
import HowItWorks from "../components/Howitworks";
import ModalScreen from "../components/modal";
import Header from "../components/Navbar";
import Slider from "../components/Slider";
import TrustedCampaigns from "../components/Trustedcampaigns";
import WhatWeProvide from "../components/Whatweprovide";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Quescup</title>
        <meta name="description" content="Securing donors ny verify donation campaign" />
        <link rel="icon" href="/images/logo.png" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Slider />
      <Whyus/>
      <WhatWeProvide/>
      <TrustedCampaigns/>
      <ModalScreen/>
      <Footer/>
    </div>
  );
}
