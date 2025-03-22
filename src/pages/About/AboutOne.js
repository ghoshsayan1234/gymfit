import React from 'react';
import classes from './About.module.css';
import workoutImage from '../../assets/workout.jpg'

const AboutOne = () => {
  return (
    <div className={classes.About}>
      <img src={workoutImage} alt="workoutImage" />
      <div>
        <h3>// About Us</h3>
        <h1>We Are Pushing</h1>
        <h1>Limit Of The Year</h1>
        <h1>Core Strength</h1>
        <p>a unit of connected speech or writing, especially composed of more than one sentence, that forms a cohesive whole. anything considered to be a subject for analysis by or as if by methods of literary criticism. Digital Technology. a text message.</p>
        <h2>Certified Trainers</h2>
        <h2>Exceptional Work Quality</h2>
        <button>Get Started Today +</button>
      </div>

    </div>
  )
}

export default AboutOne;
