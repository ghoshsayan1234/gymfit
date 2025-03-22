import React from 'react'
import AboutOne from './AboutOne'
import Stats from './Stats';
import AboutImg from './AboutImg';
import AboutTwo from './AboutTwo';
import AboutThree from './AboutThree';

const faqData = [
    {
        question: 'What is the suggested weight for strength training?',
        answer: 'Ultrices eros in cursus turpis massa tincidunt. Augue interdum velit euismod in.'
    },
    {
        question: 'What type of exercise should I do to lose weight?',
        answer: 'Cardio exercises such as running, cycling, and swimming help burn calories effectively.'
    },
    {
        question: 'Do I need to work out every day?',
        answer: 'It depends on your goals, but rest days are essential for muscle recovery.'
    },
    {
        question: 'How long should I work out for?',
        answer: 'Aim for at least 30 minutes of moderate-intensity exercise most days of the week.'
    }
];

const About = () => {
  return (
    <>
    <div>
        <AboutOne />
        <Stats />
        <AboutImg />
        <AboutTwo />
        <AboutThree />
    </div>
    </>
  )
}

export default About;
