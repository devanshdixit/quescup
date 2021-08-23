import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import styles from '../styles/Modal.module.css'
import firebase from "firebase/app";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ModalScreen() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [campLink, setCampLink] = useState('');
    const router = useRouter();
    const handleSubmit = async (event) => {
        setLoading(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setLoading(false);
        }
        if (form.checkValidity() === true) {
            event.preventDefault();
            uploadImage(image);
        }
        setValidated(true);
    };
    const handleFileUpload = async (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const uploadImage = () => {
        var storageRef = firebase.storage().ref();
        var db = firebase.firestore();
        var metadata = {
            contentType: 'image/jpeg'
        };
        var uploadTask = storageRef.child('images/' + campLink).put(image, metadata);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    try {
                        var data = {
                            'name': name,
                            'email': email,
                            'contactNo': contactNo,
                            'CampLink': campLink,
                            'imageLink': downloadURL,
                        };
                        db.collection("queries").add(data).then((docRef) => {
                            handleClose();
                            setLoading(false);
                            router.push("/");
                            toast.success('Your campaign is under review we contact you once we get anything!', {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        })
                            .catch((error) => {
                            });
                    } catch (e) {
                    }
                });
            }
        );
    }

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
                                defaultValue={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value)
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
                                defaultValue={contactNo}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setContactNo(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mt-3" controlId="validationCustom04">
                            <Form.Label>Enter Link of campaign :</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Link of campaign"
                                required
                                defaultValue={campLink}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setCampLink(e.target.value)
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid link.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mt-3 mb-3">
                            <Form.Label >Select images or pdf to upload :</Form.Label>
                            <Form.Control onChange={(e) => handleFileUpload(e)} type="file" />
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
                    <button className="btn btn-dark btn-block" onClick={handleSubmit} type="submit">{loading ? 'Uploading...' : "Submit"}</button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

