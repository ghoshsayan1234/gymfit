import React from 'react';
import classes from './AboutImage.module.css';

function AboutImage() {
  return (
    <div className={classes.container}>
      {/* Text Overlay */}
      <div className={classes.overlay}>
        <h1 className={classes.inspireText}>BE INSPIRED</h1>
        <h2 className={classes.exploreText}>EXPLORE LIFE GYM</h2>
      </div>
    </div>
  );
}

export default AboutImage;