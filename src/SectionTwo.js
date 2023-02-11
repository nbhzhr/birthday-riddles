import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React, { useState } from 'react';
import "./Section.css";

const SectionTwo = ({ name, setNextSection }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activityUnlocked, setActivityUnlocked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === name.sectionKey ) {
      setError('');
      setActivityUnlocked(true);
    } else {
      setError('still dont rememberrrr :(((((');
    }
  };

  const handleClick = () => {
    scroller.scrollTo('section-three', {
      duration: 2000,
      smooth: true,
      offset: -100,
    });

    setNextSection(prevState => ({
      ...prevState,
      sectionUnlocked: true}));
  };

  return (
    <div className="box" id="section-two">
      { name.sectionUnlocked ? (
        activityUnlocked ? (
          <div>
            <p>Activity {name.sectionName} : Mystery Mini Golf</p>
            <p>Where : 1.30PM @ Raffles Place MRT</p>
            <p>Dress Code : Be comfy no nakey just mystery</p>
            <button onClick={handleClick} className="eightbit-btn-section"> Ok put your clothes back on </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              <p>Good afternoon</p>
              I hope you got this memorized, what's my number:
              <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <p></p>
            <button type="submit" className="eightbit-btn-section">Unlock</button>
            {error && <div className="error">{error}</div>}
          </form>
      )) : (
        <div>
        <img class='locked-section'src='https://drive.google.com/uc?export=view&id=1Vkit4DviTA0TRoRb3OrDy6gIMDks8Hzb' alt='lock'></img>
      </div>
      )}
    </div>
  );
};

export default SectionTwo;