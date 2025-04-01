import React from 'react';
import classes from './Blog.module.css';
import powerLift from '../../assets/service-1.jpg';
import bothPic from '../../assets/news-10.jpg';
import leftGirl from '../../assets/about-7.jpg';
import firstAuthor from '../../assets/author-1.jpg';
import secondAuthor from '../../assets/author-2.jpg';
import firstPost from '../../assets/post-thumb-1.jpg';
import secondPost from '../../assets/post-thumb-2.jpg';
import thirdPost from '../../assets/post-thumb-3.jpg';

const Blog = () => {

  return (
    <div className={classes.blog}>
      <div className={classes.leftBar}>
        <div className={classes.mainBar}>
          <img src={powerLift} alt="power lifter" />
          <div className={classes.cardioStudio}>
            <p style={{fontSize:'15px',fontWeight:'600'}}><a href="#">CARDIO STUDIO</a>AUGUST 22, 2023</p>
            <h3>Maximizing Your Workout With The Right Equipment</h3>
            <p>5 comments     10 Likes </p>
            <p className={classes.text}>
            Our gym team members are not only passionate about fitness but also about fostering a sense of community within our gym. They create a warm and inclusive environment where members feel welcomed, supported, and connected. They organize group activities, challenges, and events that bring our members together, encouraging camaraderie, friendly competition, and mutual support. <br /><br />

  We understand that every individual is unique, with different goals, abilities, and preferences. Our gym team members excel in providing a personalized approach to your fitness journey. They take the time to listen, assess, and customize your workouts and programs to ensure they align with your objectives and fit your lifestyle. This personalized attention allows for a more effective and rewarding fitness
            </p>
            <div className={classes.whiteBox}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{height:'70px',width:'70px',borderRadius:'50%',backgroundColor:'red',color:'white',textAlign:'center',fontSize:'70px',fontWeight:'900',margin:'25px'}}>,,</div>
              <div style={{margin:'10px 30px 0 0',textAlign:'right',lineHeight:'0.5'}}>
                <h4 style={{color:'red',fontSize:'22px',fontWeight:'800'}}>William Benjamin</h4>
                <p style={{color:'black',fontSize:'18px',fontWeight:'600'}}>TOP AUTHOR</p>
              </div>
            </div>
            <p style={{color:'black',fontSize:'18px',fontWeight:'800',textAlign:'left',margin:'0 20px 25px 25px',lineHeight:'1.5',opacity:'0.8'}}>We offer discounted membership options for students and seniors who want to prioritize their health</p>
          </div>
          <div className={classes.text}>
          Our standard membership provides access to our gym facilities during regular operating hours. This option is ideal for individuals who prefer independent workouts and want to make use of our state-of-the-art equipment and amenities. For those seeking an elevated gym experience, our premium membership offers additional perks and benefits. Along with access to all our gym facilities, premium members enjoy exclusive privileges such as priority class reservations, complimentary towel service, and access to specialized training programs or workshops.<br /><br />

We understand the importance of fitness for the whole family. Our family membership option allows multiple family members to join under a single membership, making it a cost-effective choice. This option encourages a healthy and active lifestyle for everyone in your household.
          </div>
          <div className={classes.bothSide}>
            <img style={{height:'200px',width:'330px'}} src={powerLift} alt="power lifter" />
            <img style={{height:'200px',width:'330px'}} src={bothPic} alt="both side dumbell" />
          </div>
          <div className={classes.text}>
          We offer discounted membership options for students and seniors who want to prioritize their health and fitness. These specialized memberships are designed to make fitness accessible and affordable for these specific groups. If you're visiting the area or want to bring a friend along for a workout, we offer day passes and guest passes. These options allow temporary access to our gym facilities and give you a chance to experience what Fitmas has to offer.
          </div>
          <div style={{marginTop:'20px'}}>
            <button style={{fontSize:'18px',fontWeight:'300', height:'44px',width:'110px',marginRight:'20PX'}}>Fitness</button>
            <button style={{fontSize:'18px',fontWeight:'300', height:'44px',width:'110px',marginRight:'20px'}}>Gym</button>
            <button style={{fontSize:'18px',fontWeight:'300', height:'44px',width:'110px',marginRight:'20px'}}>Muscle</button>
          </div>
          </div>
        </div>
        <div className={classes.secondBar}>
            <img style={{height:'100px',width:'140px'}} src={leftGirl} alt="left girl" />
            <div className={classes.michaelClark}>
              <h4>Micheal Clark</h4>
              <p>We offer discounted membership options for students and seniors who want to prioritize their health and fitness. These specialized designed to make fitness.</p>
            </div>
        </div>
        <div className={classes.comments}>
          <h3>Comments (2)</h3>
          <div className={classes.firstComment}>
            <div className={classes.box}>
            <img src={firstAuthor} alt="" />
            </div>
            <div className={classes.innerText}>
              <h5>Monyha Smith</h5>
              <div>Employs thin strands of glass or plastic to transmit data as pulses of light, offering high speeds and reliability.</div><br />
              <div>February 03. 2024 <a href="#">Reply</a></div>
            </div>
          </div>
          <div className={classes.secondComment}>
          <div className={classes.box}>
          <img src={secondAuthor} alt="" />
          </div>
            <div className={classes.innerText}>
              <h5>Warner Joseph</h5>
              <div>Employs thin strands of glass or plastic to transmit data as pulses of light, offering high speeds and reliability.</div><br />
              <div>February 03. 2024 <a href="#">Reply</a></div>
            </div>
          </div>
        </div>
        <div className={classes.rating}>
          <h1>Leave a Reply</h1>
          <h4>Rating:</h4>
          <input type="text" placeholder='your name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Write Comment' style={{height:'130px'}} />
          <p>Save my name, email, and website in this browser for the next time I Massage.</p>
          <button>Post Comment+</button>
        </div>
      </div>
      <div className={classes.rightBar}>
        <input className={classes.search} type="text" placeholder='Search now' />
        <div style={{marginTop:'90px'}}>
          <h4 style={{color:'black',textAlign:'left',fontSize:'25px',fontWeight:'800',opacity:'0.8'}}>Categories</h4>
          <div className={classes.list}>
            <ul>
              <li style={{lineHeight:'2.2'}}>Cardio Fitness</li>
              <li style={{lineHeight:'2.2'}}>Muscle Fitness</li>
              <li style={{lineHeight:'2.2'}}>Gymer Fitness</li>
              <li style={{lineHeight:'2.2'}}>Health Fitness</li>
              <li style={{lineHeight:'2.2'}}>Trainers Fitness</li>
            </ul>
            <ul>
              <li style={{lineHeight:'2.2'}}>25</li>
              <li style={{lineHeight:'2.2'}}>32</li>
              <li style={{lineHeight:'2.2'}}>35</li>
              <li style={{lineHeight:'2.2'}}>22</li>
              <li style={{lineHeight:'2.2'}}>15</li>
            </ul>
          </div>
        </div>
        <div className={classes.recentPosts}>
          <h4>Recent Posts</h4>
          <div className={classes.post}>
            <img style={{height:'110px',width:'110px',marginTop:'40px',marginRight:'30px'}} src={firstPost} alt="" />
            <div>
              <h5>How To Continue Being Motivated</h5>
              <div>10 Jun 2024</div>
            </div>
          </div>
          <div className={classes.post}>
          <img style={{height:'110px',width:'110px',marginTop:'40px',marginRight:'30px'}} src={secondPost} alt="" />
            <div>
              <h5>Exercises To Improve Your Butt</h5>
              <div>16 Jun 2023</div>
            </div>
          </div>
          <div className={classes.post}>
          <img style={{height:'110px',width:'110px',marginTop:'40px',marginRight:'30px'}} src={thirdPost} alt="" />
            <div>
              <h5>How To Prevent Exercise Injuries</h5>
              <div>16 Jun 2023</div>
            </div>
          </div>
        </div>
        <div className={classes.popularTags}>
          <h4>Popular Tags</h4>
          <div>
            <button style={{width:'65px'}}>GYM</button>
            <button style={{width:'130px'}}>FITNESS</button>
            <button style={{width:'80px'}}>WALK</button>
            <button style={{width:'140px'}}>EXERCISE</button>
            <button style={{width:'80px'}}>YOGA</button>
            <button style={{width:'115px'}}>MUSCLE</button>
            <button style={{width:'115px'}}>RUNNER</button>
          </div>
        </div>
        <div className={classes.needHelp}>
          <h3>Need Help?</h3>
          <p>Speak with a human to filling out a form? call corporate office and we will connect.</p>
          <div className={classes.number}>+(016) 6625505</div>
          <div className={classes.email}>info@gymfitness.com</div>
          <button>Get More Service</button>
        </div>
      </div>
    </div>
  )
}

export default Blog;
