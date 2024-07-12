import React from 'react';
import Scrollers from '../components/Scrollers';
import "../styles/skills.scss";

const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'REACT NATIVE', 'ANGULAR', '.NET', 'UI/UX'];
const gradientColors1 = ['#FA9C92', '#FFFFFF']; // Example gradient colors for the first row
const gradientColors2 = ['#C4F8D3', '#FFFFFF']; // Example gradient colors for the second row
const gradientColors3 = ['#FFFFFF', '#B68BED']; // Example gradient colors for the third row

const Skills = () => {
  return (
    <div className='skills-scrollers'>
      <Scrollers skills={skills} direction="right" gradientColors={gradientColors1} gradientDirection="right" />
      <Scrollers skills={skills} direction="left" gradientColors={gradientColors2} gradientDirection="center" />
      <Scrollers skills={skills} direction="right" gradientColors={gradientColors3} gradientDirection="left"/>
    </div>
  );
};

export default Skills;
