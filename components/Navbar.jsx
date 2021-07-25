/* eslint-disable @next/next/no-img-element */
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import styles from  '../styles/Header.module.css'

const Header = () => {
    return (
        <Container className="p-2 mt-2 pl-1 pr-1">
            <div className="row">
                <div className="col"><img src={`/images/logo.PNG`}  width="100" height="100" alt="" /></div>
                <div className="col pt-4" style={{maxWidth:"120px"}}>
                    <div className={styles.headerlink}style={{paddingLeft:".8em"}}>About</div>
                </div>
                <div className="col pt-4" style={{maxWidth:"120px"}}>
                    <div className={styles.headerlink}>Services</div>
                </div>
                <div className="col pt-4" style={{maxWidth:"120px"}}>
                    <div className={styles.headercontact}>ContactUs</div>
                </div>
            </div>
        </Container>
    )
}
export default Header
{/* <Navbar bg="light" className="p-2 mt-2 bg-white" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={`/images/logo.PNG`}  width="100" height="100" alt="" /></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}