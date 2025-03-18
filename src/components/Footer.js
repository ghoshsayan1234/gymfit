import React from 'react';
import first from '../assets/2.jpg';
import second from '../assets/27.jpg';
import third from '../assets/3.jpg';
import four from '../assets/5.jpg';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
        <h1>LETS DISCUSS</h1>
    <div>
        <img src={first} alt="" />
        <img src={second} alt="" />
        <img src={third} alt="" />
        <img src={four} alt="" />
    </div>
    </div>
  )
}

export default Footer
