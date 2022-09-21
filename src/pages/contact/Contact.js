import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from "../../assets/images/logo-bg-si-min.png";
import { Modal, Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Contact.css";
import Loader from "../../components/loader/Loader";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactModal(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [LoaderSpiner, setLoaderSpiner] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [isVerifyRecap, setIsVerifyRecap] = useState(false);

  const handleSubmit = (e) => {
    console.log(values.message.length);
    e.preventDefault();
    setSubmitted(true);
    setLoaderSpiner(true);
    if (values.name === null || values.name === "") {
      setLoaderSpiner(false);
      return;
    }
    if (values.email === null || values.email === "") {
      setLoaderSpiner(false);
      return;
    }
    if (values.subject === null || values.subject === "") {
      setLoaderSpiner(false);
      return;
    }
    if (
      values.message === null ||
      values.message === "" ||
      values.message.length < 5
    ) {
      setLoaderSpiner(false);
      return;
    }
    emailjs
      .send("service_ppwohve", "template_nlara9w", values, "QHLZrnVjPoW_otxr4")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
          setStatus("SUCCESS");
          setSubmitted(false);
          setLoaderSpiner(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitted(false);
          setLoaderSpiner(false);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setLoaderSpiner(true);
      setShowSuccess(true);
      setTimeout(() => {
        setStatus("");
        setLoaderSpiner(false);
      }, 3000);
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  function handleOnChangeRecaptcha(e) {
    if (e === null) {
      console.log("Captcha value:", e);
      setIsVerifyRecap(false);
    }
    console.log("Captcha value:", e);
    setIsVerifyRecap(true);
  }

  const validateCaptcha = (e) => {
    if (e === undefined) {
      console.log("Captcha value:", e);
      setIsVerifyRecap(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      variant="dark"
    >
      <Helmet>
        <meta
          name="description"
          content="CONTACT BG SHOOTING INSTRUCTION, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES & PROFESSIONALS"
        />
        <meta
          name="keywords"
          content="IPSC TSV BG SHOOTING INSTRUCTION, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES & PROFESSIONALS"
        />
        <title>CONTACT BG SHOOTING INSTRUCTION</title>
        <link rel="canonical" href="https://bg-si.fr/contact/" />
      </Helmet>
      <Modal.Header>
        <NavLink className="nav-link" to="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top logo-header"
            alt="Logo BG SHOOTING INSTRUCTION"
            title="Logo BG SHOOTING INSTRUCTION"
          />
        </NavLink>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="title-contact"
        >
          CONTACT BG INSTRUCTOR
        </Modal.Title>
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={props.onHide}
        ></button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter Name"
              className="mb-3"
              onChange={handleChange}
              value={values.name}
              name="name"
            />
            {submitted && !values.name && (
              <span id="name-error" className="form-error">
                Please enter name
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={values.email}
              name="email"
            />
            {submitted && !values.email && (
              <span id="email-error" className="form-error">
                Please enter an email address
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Select request type</Form.Label>
            <Form.Select
              size="sm"
              onChange={handleChange}
              value={values.subject}
              name="subject"
            >
              <option value="">Select subject</option>
              <option value="Professionnelle">
                security professional (Professionnelle de la sécurité )
              </option>
              <option value="TSV-IPSC">
                IPSC Athletes (Tireur Sportif TSV-IPSC){" "}
              </option>
              <option value="AUTRE">Other (Autre)</option>
            </Form.Select>
            {submitted && !values.subject && (
              <span id="subject-error" className="form-error">
                Please Select an subject
              </span>
            )}
          </Form.Group>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              value={values.message}
              name="message"
            />
          </Form.Group>
          {submitted && !values.message && values.message.length < 5 && (
            <span id="message-error" className="form-error">
              Please enter an message (6 characters min)
            </span>
          )}
          <div className="recaptcha-div">
            <ReCAPTCHA
              sitekey="6Ld7vyofAAAAADa5X42RHc-FTi09D3Xlp7lk3GCr"
              // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              theme="dark"
              onExpired={validateCaptcha}
              onChange={handleOnChangeRecaptcha}
            />
          </div>

          {isVerifyRecap ? (
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="mt-3">
                Send
              </Button>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <Button disabled variant="primary" type="submit" className="mt-3">
                Send
              </Button>
            </div>
          )}

          {showSuccess ? (
            <div className="success-message">
              <p className="lead">Thank you !</p>
              <p>
                Your message has been successfully sent. We will contact you
                very soon!
              </p>
            </div>
          ) : null}
          {LoaderSpiner ? <Loader /> : null}
          {/* {result ? <Result /> : null} */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
