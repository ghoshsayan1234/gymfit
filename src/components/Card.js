import React from 'react'
import gym1 from '../assets/6.jpg';
import gym2 from '../assets/7.jpg';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
        <div className={classes.group}>
            <img src={gym1} alt="gymboy" />
            <p>Maximizing Your Workout With The Right Equipment</p>
            <a href="https://www.google.com/search?client=firefox-b-d&q=shape+up+fitness+studio&sei=2W3WZ9mXJuGYseMPjMetsQg">Read More</a>
        </div>
        <div className={classes.group}>
            <img src={gym2} alt="gymgirl" />
            <p>How to Set Realistic Fitness Goals and Achieve Them</p>
            <a href="https://www.google.com/search?client=firefox-b-d&q=shape+up+fitness+studio&sei=2W3WZ9mXJuGYseMPjMetsQg">Read More</a>
        </div>
    </div>
  )
}

export default Card
