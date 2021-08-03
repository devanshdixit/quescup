import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import styles from '../styles/Modal.module.css'

export default function ModalScreen() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [address1, setAddress1] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (form.checkValidity() === true) {
            event.preventDefault();
            addAddress({
                'name': name,
                'addess': address,
                'address1': address1,
                'city': city,
                'state': state,
                'zip': zip,
            });
            router.push("/payment");
        }
        setValidated(true);
    };

    return (
        <section id="contact" className="container" style={{ paddingBottom: "100px", paddingTop: "100px" }}>
            <h1 className={styles.header}>Tell us about the Campaign here</h1>
            <hr className={styles.hr} />
            <div className="text-center  ml-1 mr-1 mt-4 pt-4">
                <Button variant="primary" size="lg" onClick={handleShow}>
                    Click Here!
                </Button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                aria-labelledby="contained-modal-title-vcenter"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tell us about the campaign you want to know!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-dark">
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Enter Name :</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue={name}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setName(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="validationCustom03">
                            <Form.Label>Enter EmailId :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter EmailId"
                                required
                                defaultValue={address}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setAddress(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your emailid
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mt-3" >
                            <Form.Label>Contact No:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter contact no"
                                defaultValue={address1}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setAddress1(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="validationCustom04">
                            <Form.Label>Enter Link of campaign :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Link of campaign"
                                required
                                defaultValue={city}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setCity(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mt-3 mb-3">
                            <Form.Label>Select images or pdf to upload :</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mt-3 mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button className="btn btn-dark btn-block" type="submit">Submit</button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

