import React, { useState } from 'react';
import './AboutThree.css';
import gymImage from '../../assets/program-4.jpg';

const faqs = [
  {
    question: 'What is the suggested weight for strength training?',
    answer:
      'Ultrices eros in cursus turpis massa tincidunt. Augue interdum velit euismod in pellentesque massa.',
  },
  {
    question: 'What type of exercise should I do to lose weight?',
    answer:
      'Focus on a combination of cardio, strength training, and a balanced diet to effectively lose weight.',
  },
  {
    question: 'Do I need to work out every day?',
    answer:
      'No, 3-5 days a week is generally sufficient. Rest is also an important part of your fitness routine.',
  },
  {
    question: 'How long should I work out for?',
    answer:
      'Aim for 30-60 minutes per session, depending on your goals and the type of workout you are doing.',
  },
];

const AboutThree = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="faq-container">
        <div className="image-container">
          <img src={gymImage} alt="Workout" />
        </div>
        <div className="faq-content">
          <h3>// Some FAQ's</h3>
          <h1>Frequently Asking Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <span>{index + 1}. {faq.question}</span>
                <span className="arrow">{activeIndex === index ? '▼' : '▶'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default AboutThree;