/* eslint-disable @next/next/no-img-element */
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import styles from '../styles/Header.module.css'

const Header = () => {
    const scrollto = (id) => {
        const contact = window.document.getElementById(id);
        contact.scrollIntoView();
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img src={`/images/logo.PNG`} className={styles.imgsize} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={()=>scrollto("about")} className={styles.headerlink} style={{ paddingLeft: ".8em" }}>About</Nav.Link>
                        <Nav.Link onClick={()=>scrollto("services")} className={styles.headerlink} style={{ paddingLeft: ".8em" }}>Services</Nav.Link>
                        <Nav.Link onClick={()=>scrollto("contact")} className={styles.headerlink} style={{ paddingLeft: ".8em" }}>ContactUs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Container className="p-2 mt-2 pl-1 pr-1">
        //     <div className="row">
        //         <div className="col bg-danger" style={{ maxWidth: "70px" }}><img src={`/images/logo.PNG`} className={styles.imgsize} alt="" /></div>
        //         <div className="col bg-success pt-4" style={{ maxWidth: "120px" }}>
        //             <div className={styles.headerlink} style={{ paddingLeft: ".8em" }}>About</div>
        //         </div>
        //         <div className="col bg-warning pt-4" style={{ maxWidth: "120px" }}>
        //             <div className={styles.headerlink}>Services</div>
        //         </div>
        //         <div className="col bg-danger pt-4" style={{ maxWidth: "120px" }}>
        //             <div className={styles.headerlink} onClick={scrollto}>ContactUs</div>
        //         </div>
        //     </div>
        // </Container>
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