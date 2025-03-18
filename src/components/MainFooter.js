import React from "react";
import classes from './MainFooter.module.css';
import favicon from '../assets/favicon.png'

const MainFooter = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSection}>
        <div className={classes.footerLeft}>
          <div className={classes.footerLeftTop}>
          <img src={favicon} alt="favicon" />
          <h2>GYMFIT</h2>
          </div>
          <p>Welcome to GymFit Fitness! We are here to support and guide you.</p>
          <div className={classes.socialIcons}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className={classes.footerCenter}>
          <h1>//CONTACT</h1>
          <div>
          <p>0665 Broadway NY, New York 10001</p>
          <p>United States of America</p>
          </div>
          <p>Phone: +1 203-123-0606</p>
          <p>Email: info@nostop.com</p>
        </div>

        <div className={classes.footerRight}>
          <h1>//OPENING HOURS</h1>
          <div>
          <p>Monday - Friday</p>
          <p> 06:00 - 22:00</p>
          </div>
          <div><p>Saturday</p>
          <p>08:00 - 17:00</p>
          </div>
          <div>
          <p>Sunday</p>
          <p>Closed</p>
          </div>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <div></div>
        <p>2024 © All rights reserved. Designed by GymFit</p>
      </div>
    </div>
  );
};

export default MainFooter;