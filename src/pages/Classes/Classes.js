import React from 'react'
import classes from './Classes.module.css';
import thumbOne from '../../assets/footer-gallery-thumb-1.jpg';
import thumbTwo from '../../assets/footer-gallery-thumb-2.jpg';
import thumbThree from '../../assets/footer-gallery-thumb-3.jpg';
import thumbFour from '../../assets//footer-gallery-thumb-4.jpg';
import thumbFive from '../../assets/footer-gallery-thumb-5.jpg';
import thumbSix from '../../assets/footer-gallery-thumb-6.jpg';
import thumbSeven from '../../assets/footer-gallery-thumb-7.jpg';
import thumbEight from '../../assets/footer-gallery-thumb-8.jpg';
import thumbNine from '../../assets/footer-gallery-thumb-9.jpg';
import coachGirl from '../../assets/coach-4.jpg';
import servicePic from '../../assets/service-7.jpg';

const Classes = () => {
  return (
    <div className={classes.classes}>
      <div className={classes.sideBar}>
        <h3>OTHER SECTIONS</h3>
        <div className={classes.images}>
          <div className={classes.div1}>FITNESS</div>
          <div className={classes.div2}>CROSSFIT</div>
          <div className={classes.div3}>CARDIO</div>
        </div>
        <div>
          <h3 style={{fontSize: '25px', fontWeight: 100}}>INSTAGRAM</h3>
          <div className={classes.pictures}>
            <ul>
              <li><img src={thumbOne} alt="" /></li>
              <li><img src={thumbTwo} alt="" /></li>
              <li><img src={thumbThree} alt="" /></li>
            </ul>
            <ul>
              <li><img src={thumbFour} alt="" /></li>
              <li><img src={thumbFive} alt="" /></li>
              <li><img src={thumbSix} alt="" /></li>
            </ul>
            <ul>
              <li><img src={thumbSeven} alt="" /></li>
              <li><img src={thumbEight} alt="" /></li>
              <li><img src={thumbNine} alt="" /></li>
            </ul>
          </div>
        </div>
        <div>
          <div className={classes.newsLetter}>
          <h3 style={{fontSize: '25px', fontWeight: 100}}>NEWSLETTER</h3>
          <p style={{fontSize: '14px'}}>GymFit – fitness health center where your body gets its shape! Start training now to stay fit and healthy all year round!</p>
          </div>
          <div style={{display:'flex'}}>
          <input type="email" placeholder='Email' className={classes.input} />
          <button></button>
          </div>
        </div>
      </div>
      <div className={classes.mainBar}>
        <div className={classes.firstMain}>
          <div className={classes.michaelWook}>
            <div style={{marginBottom: '50px'}}>
            <h3>Micheal Wook</h3>
            <p>Specialty:<a href='#'>Bodybuilding</a></p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />

Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <div className={classes.coach}><img src={coachGirl} alt="girl coach" /></div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{height:'84px', width:'10px',backgroundColor:'red', margin:'30px 50px 10px 10px'}}></div>
          <p style={{color:'black', fontSize:'21px', fontWeight:'150', textAlign:'left',lineHeight:'1.4'}}>Want to be healthy and have a perfect body? BigBear is the right decision for you! It will create your personal training program and balance your diet so you could get the shape of your dream shortly! </p>
        </div>
        <div className={classes.mySocial}>
          <img className={classes.servicePic} src={servicePic} alt="" />
          <div>
            <p>MY SOCIALS:</p>
          </div>
        </div>
        <div className={classes.last}>
          <div className={classes.appointment}>
          <h3>GET APPOINTMENT</h3>
          <p>If you need of a Personal Trainer, Fitness Instructor advice, or a healthy living product review,<br/>
          please feel free to contact us</p>
          </div>
            <div className={classes.firstRow}>
            <input type="text" placeholder='Name' className={classes.lastInput} />
            <input type="text" placeholder='Email' className={classes.lastInput} />
            </div>
            <input type="text" placeholder='Your Message' className={classes.bigInput} />
        </div>
        <div className={classes.lastDiv}>
          <button>
            Send Message +
          </button>
          <p>* Personal data will be encrypted</p>
        </div>
      </div>
    </div>
  )
}

export default Classes;
