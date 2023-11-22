import React, { useState } from "react";
import "./Footer.css";
import { Typography, Link} from "@mui/material";
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="description-footer footer-items">
        <Typography variant="h5" gutterBottom>
          Shortcuttrainer
        </Typography>
        <Typography variant="body1">
          Lernen Sie heute noch mit dem Schortcuttrainer ihr Programm voll
          auszunutzen
        </Typography>
      </div>
      <div className="quicklinks-container footer-items">
        <Typography variant="h6">Quick Links</Typography>
        <div className="quicklinks">
          <Link href="" underline="none" color="white">
            Home
          </Link>
          <Link href="" underline="none" color="white">
            MyProfile
          </Link>
          <Link href="" underline="none" color="white">
            MyCourses
          </Link>
        </div>
      </div>
      <div className="contact-information footer-items">
        <Typography variant="h6">Contact Information</Typography>
        <div className="contact-information-content">
          <Typography variant="body1">max.mustermann@muster.de</Typography>
          <Link href="" underline="none" color="white">
            hs-fulda.de
          </Link>
        </div>
      </div>
    </footer>
  );
}
