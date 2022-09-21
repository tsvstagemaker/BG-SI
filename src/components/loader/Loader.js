import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center mt-3">
      {/* <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="danger" /> */}
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="danger" />
    </div>
  );
}
