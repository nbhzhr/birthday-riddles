import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Intro.css'

const Intro = ({nextSection, setNextSection}) => {
    const handleClick = () => {
        scroller.scrollTo('section-one', {
          duration: 2000,
          smooth: true,
          offset: -100,
        });

        setNextSection(prevState => ({
          ...prevState,
          sectionUnlocked: true}));
      };

    return (
        <div className='introBox'>
            <p>HAPPY BIRTHDAY SAYANG 💕 </p>
            <p>Don't worry, we're not gonna do anything crazy today hehe 🛀🏻 </p>
            <p>Hope you enjoy my lineup today 🥳 </p>
            <button onClick={handleClick} className="eightbit-btn"> LET'S GO </button>
        </div>
    );
};

export default Intro;