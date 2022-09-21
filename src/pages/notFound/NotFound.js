import React from "react";
import "./NotFound.css";
import Loader from "../../components/loader/Loader";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="notFound">
      <Helmet>
        <meta
          name="description"
          content="NOT FOUND BG SHOOTING INSTRUCTION, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES & PROFESSIONALS"
        />
        <meta
          name="keywords"
          content="IPSC TSV BG SHOOTING INSTRUCTION, OPERATIONAL AND TECHNIQUES SHOOTING INSTRUCTOR, TRAINING FOR ATHLETES & PROFESSIONALS"
        />
        <title>NOT FOUND BG SHOOTING INSTRUCTION</title>
        <link rel="canonical" href="https://bg-si.fr/notFound/" />
      </Helmet>
      <h1 className="notFound-h1">
        Page Not Found <Loader />{" "}
        <NavLink className="nav-link" to="/">
          Go to home ...
        </NavLink>
      </h1>
    </div>
  );
}
