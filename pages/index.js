import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import HowItWorks from "../components/Howitworks";
import Header from "../components/Navbar";
import Slider from "../components/Slider";
import Whyus from "../components/Whyus";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Quescup</title>
        <meta name="description" content="Securing donors ny verify donation campaign" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Slider />
      <Whyus/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
