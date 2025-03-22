import classes from './About.module.css';
import trainerImage from '../../assets/about-7.jpg';
import firstIcon from '../../assets/1.png';
import secondIcon from '../../assets/2.png';
import thirdIcon from '../../assets/3.png';
import fourthIcon from '../../assets/4.png';


const AboutTwo = () => {
  return (
    <>
        <div className={classes.About}>
            <img src={trainerImage} alt="workoutImage" style={{height: '650px', marginLeft: '130px'}} />
            <div>
                <h3>//Know About Us</h3>
                <h1>You Gat Personal</h1>
                <h1>Training Every-</h1>
                <h1>We Are Now</h1>
                <p>a unit of connected speech or writing, especially composed of more than one sentence, that forms a cohesive whole. anything considered to be a subject for analysis by or as if by methods of literary criticism. Digital Technology. a text message.</p>
                <h2>We find your trainers</h2>
                <h2>We make your plans</h2>
                <h2>Take training anywhere</h2>
                <button>Get Started Today +</button>
            </div>
        </div>
        <div className={classes.footer}>
            <img src={firstIcon} alt="firstIcon" />
            <img src={secondIcon} alt="secondIcon" />
            <img src={thirdIcon} alt="thirdIcon" />
            <img src={fourthIcon} alt="fourthIcon" />
        </div>
    </>
  )
}

export default AboutTwo;