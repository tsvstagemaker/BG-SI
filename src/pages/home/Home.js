import React, { useState } from "react";
import shooterBg1 from "../../assets/images/bg-1-min.png";
import shooterBg2 from "../../assets/images/bg-2-min.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Home.css";
import ContactModal from "../contact/Contact";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="HOME BG SHOOTING INSTRUCTION BG-SI, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS, IPSC TSV AND MORE..."
        />
        <meta
          name="keywords"
          content="IPSC TSV SHOOTING INSTRUCTION, SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS"
        />
        <title>HOME BG SHOOTING INSTRUCTION</title>
        <link rel="canonical" href="https://bg-si.fr/" />
      </Helmet>
      <main className="">
        <div className="bg-card">
          <h1>BG SHOOTING INSTRUCTION</h1>
          <p className="lead france bounce-in-left"> </p>
          <h2 className="lead">OPERATIONAL SHOOTING TECHNIQUES</h2>

          <h2 className="lead">ATHLETES & PROFESSIONALS TRAINING</h2>

          <p className="lead mt-3">
            <button
              className="btn btn-lg custom-btn btn-contact-home"
              onClick={() => setModalShow(true)}
            >
              Contact us
            </button>
          </p>

          <p>
            <NavLink className="about-link" to="about">
              About BG shooting instructor...
            </NavLink>
          </p>

          <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>

        <div className="shooter">
          <img
            src={shooterBg1}
            alt="shooter BG SHOOTING INSTRUCTION 1"
            className="bg-image1"
            title="shooter BG SHOOTING INSTRUCTION 1"
            loading="lazy"
            width="..."
            height="..."
          />
          <img
            src={shooterBg2}
            alt="shooter BG SHOOTING INSTRUCTION 2"
            className="bg-image2"
            title="shooter BG SHOOTING INSTRUCTION 2"
            loading="lazy"
            width="..."
            height="..."
          />
        </div>
      </main>
    </div>
  );
}
