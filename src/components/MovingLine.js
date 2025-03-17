import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import classes from './MovingLine.module.css'

const MovingLine = () => {
  return (
    <div className={classes.scrollingBanner}>
      <div className={classes.content}>
        <span><FontAwesomeIcon icon={faDumbbell} />KETTLEBELL</span>
        <span><FontAwesomeIcon icon={faDumbbell} />JUMP ROPE</span>
        <span><FontAwesomeIcon icon={faDumbbell} />MEDICINE BALL</span>
      </div>
    </div>
  )
}

export default MovingLine;
