import React, { useState } from "react";
import "./Footer.css";
import { Typography, Link } from "@mui/material";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="description footer-items">
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Shortcuttrainer
        </Typography>
        <Typography variant="subtitle2">
          Lernen Sie heute noch mit dem Schortcuttrainer ihr Programm voll
          auszunutzen
        </Typography>
      </div>
      <div className="quicklinks-container footer-items">
        <Typography variant="h6">Quick Links</Typography>
        <div className="quicklinks">
          <Link href="" underline="none">
            Home
          </Link>
          <Link href="" underline="none">
            MyProfile
          </Link>
          <Link href="" underline="none">
            MyCourses
          </Link>
        </div>
      </div>
      <div className="contact-information footer-items">
        <Typography variant="h6">Contact Information</Typography>
        <div className="contact-information-content">
            <Typography variant="subtitle2">
                max.mustermann@muster.de
            </Typography>
            <Link href="" underline="none">hs-fulda.de</Link>
        </div>
      </div>
    </footer>
  );
}
