import React from "react";
import CookieConsent from "react-cookie-consent";
import { NavLink } from "react-router-dom";
import "./CookieConsent.css";

export default function CookieConsentComp() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        cookieName="bgSiDataStore"
        buttonText="I understand"
        style={{ background: "#333333", zIndex: 9999 }}
        buttonStyle={{
          background: "#ffffff",
          color: "#333333",
          fontSize: "13px",
          borderRadius: "3px",
        }}
        declineButtonStyle={{
          background: "#333333",
          color: "#ffffff",
          fontSize: "13px",
          borderRadius: "3px",
        }}
        expires={150}
        enableDeclineButton
        onDecline={() => {
          console.log("Terms and conditions disclaimed!");
        }}
      >
        This site uses cookie to enhance the user experience. See our{" "}
        <NavLink
          className="Termes-and-conditions-link"
          to="/TermesAndConditions"
        >
          Terms and conditions
        </NavLink>{" "}
        for more...
      </CookieConsent>
    </div>
  );
}
