import React from 'react'
import firstPic from '../../assets/service-2.jpg';
import secondPic from '../../assets/about-5.jpg';
import classes from './Portfolio.module.css';
import treadMill from '../../assets/7.jpg';
import girlImage from '../../assets/17.jpg';
import boyImage from '../../assets/6.jpg';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <div className={classes.picture}>
      <img src={firstPic} alt="firstPic" />
      <img src={secondPic} alt="secondPic" />
      </div>
      <div className={classes.middle}>
        <div>
          <h2>Category</h2>
          <p>Digital Design</p>
        </div>
        <div>
          <h2>Customer</h2>
          <p>Noortech themes</p>
        </div>
        <div>
          <h2>Date</h2>
          <p>AUGUST 6, 2023</p>
        </div>
        <div>
          <h2>Location</h2>
          <p>Melbourne, Australia</p>
        </div>
      </div>
      <div className={classes.cbt}>
        <h1>Champion Boxer Training</h1>
        <p>Boxers engage in intense cardiovascular exercises to build endurance and stamina. This includes activities like running, skipping rope, and high-intensity interval training (HIIT) to improve overall cardiovascular fitness. Strength and Power Training: Boxers focus on building functional strength and explosive power to deliver powerful punches. This involves weightlifting exercises, plyometrics, and bodyweight exercises such as push-ups, pull-ups, squats, and core exercises.</p>
        <br/>
        <p>During the CrossFit Boxing Challenge, you'll engage in a dynamic workout regimen that incorporates elements of strength training, cardiovascular conditioning, agility, and coordination. Under the guidance of experienced coaches, you'll learn proper boxing techniques, footwork, and defensive maneuvers, all while pushing yourself through a series of intense CrossFit workouts. Each session will challenge your physical and mental resilience, building not only strength but also enhancing your endurance and mental toughness.</p>
      </div>
      <div className={classes.textWithImage}>
        <div>
          <h3>
          We create everything digital, printable and analytical.
          </h3>
          <p>
          Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.
          </p>
          <div>
            <ul>
              <li>♦ Brand Development</li>
              <li>♦ Art Direction</li>
              <li>♦ Marketing Strategy</li>
              <li>♦ Mobile App Design</li>
            </ul>
            <ul>
              <li>♦ Content Management</li>
              <li>♦ System & Guides</li>
              <li>♦ Graphic Design</li>
              <li>♦ Brand Development</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={treadMill} alt="Tread Mill" />
        </div>
      </div>
      <div className={classes.imageWithText}>
        <div className={classes.paragraph}>
          <p>Boxers engage in intense cardiovascular exercises to build endurance and stamina. This includes activities like running, skipping rope, and high-intensity interval training (HIIT) to improve overall cardiovascular fitness. Strength and Power Training: Boxers focus on building functional strength and explosive power to deliver powerful punches. This involves weightlifting exercises, plyometrics, and bodyweight exercises such as push-ups, pull-ups, squats, and core exercises.

</p><br /><p>During the CrossFit Boxing Challenge, you'll engage in a dynamic workout regimen that incorporates elements of strength training, cardiovascular conditioning, agility, and coordination. Under the guidance of experienced coaches, you'll learn proper boxing techniques, footwork, and defensive maneuvers, all while pushing yourself through a series of intense CrossFit workouts. Each session will challenge your physical and mental resilience, building not only strength but also enhancing your endurance and mental toughness</p>
        </div>
        <div className={classes.image}>
          <img src={girlImage} alt="girl image" />
          <img src={boyImage} alt="boy image" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
