import React, { useState } from "react";
import shooterBg1 from "../../assets/images/bg-1-min.png";
import shooterBg2 from "../../assets/images/bg-2-min.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./About.css";
import ContactModal from "../contact/Contact";

function About() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="about">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ABOUT BG SHOOTING INSTRUCTION BG-SI, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS, IPSC TSV AND MORE..."
        />
        <meta
          name="keywords"
          content="IPSC TSV SHOOTING INSTRUCTION, SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES AND PROFESSIONALS"
        />
        <title>ABOUT BG SHOOTING INSTRUCTION</title>
        <link rel="canonical" href="http://bg-si.fr/about/" />
      </Helmet>
      <main className="main-about">
        <div className="bg-card">
          <h1>ABOUT BG SHOOTING INSTRUCTION</h1>
          <p className="lead france bounce-in-right"></p>
          <h2 className="about-h2">
            BG SHOOTING INSTRUCTOR FOR ATHLETES & PROFESSIONALS TRAINING
          </h2>
          <NavLink
            to="#"
            onClick={() => (window.location = "mailto:bg-si@bg-si.fr")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope me-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            bg-si@bg-si.fr
          </NavLink>
          <br /> <br />
          <p className="">N° de SIRET 90477134200014</p>
          <p className="lead">
            <button
              className="btn btn-lg custom-btn btn-contact-about"
              onClick={() => setModalShow(true)}
            >
              Contact us
            </button>
          </p>
          <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>

        <div className="shooter">
          <img
            src={shooterBg1}
            alt="SHOOTER BG SHOOTING INSTRUCTION 1"
            className="bg-about-image1"
            title="SHOOTER BG SHOOTING INSTRUCTION 1"
            loading="lazy"
            width="..."
            height="..."
          />
          <img
            src={shooterBg2}
            alt="SHOOTER BG SHOOTING INSTRUCTION 2"
            className="bg-about-image2"
            title="SHOOTER BG SHOOTING INSTRUCTION 2"
            loading="lazy"
            width="..."
            height="..."
          />
        </div>
      </main>
      <div className="container about-biography">
        <div className="biography">
          <h3>BG's BIOGRAHY</h3>
          <br />
          <br />
          <h4>Bertrand started IPSC in 2002,</h4>

          <p>
            <p>
              He obtained his first diploma as a Handgun instructor in 2004 and
              for 10 years he was joining the national shooter group
              constituting French teams.
            </p>
            <p>
              During this time, Bertrand benefited from training and methods of
              preparation from the French shooting federation. He is several
              times French vice-champion in standard division on SV-Infinity®,
              Top 5 France in Shotgun on MOLOT®.
            </p>
            <p>He also shot several European and World Championships.</p>
            <p>
              The transfer of knowledge to athletes, such as law enforcement is
              a real passion for Bertrand.
            </p>
            <p>
              He is now a professional shooting instructor with a special
              national state diploma in shooting, Teaching, Animation,
            </p>
            <p>
              Supervision and Training in a perspective of Sports Development,
              to which IPSC, Handgun, Shotgun and Rifle instructor diplomas can
              be added.
            </p>
            <p>
              He is also an instructor at ASP® (Armament Systems and Procedures)
              and very recently became an instructor at Stop The Bleed®.
            </p>
            <p>
              He will shoot the WorldSHoot events, on Kimber, in Pataya in
              Classic Division and will be equipped with M-Arms products.
            </p>
            <br />
          </p>
          <p style={{ fontStyle: "italic" }}>BG SHOOTING INSTRUCTION</p>
        </div>
      </div>
    </div>
  );
}

export default About;
