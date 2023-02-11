// eslint-disable-next-line
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import React, { useState } from 'react';
import "./Section.css";

const SectionOne = ({ name, setNextSection }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activityUnlocked, setActivityUnlocked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === name.sectionKey ) {
      setError('');
      setActivityUnlocked(true);
    } else {
      setError('NOOooOoOoOoO');
    }
  };

  const handleClick = () => {
    scroller.scrollTo('section-two', {
      duration: 2000,
      smooth: true,
      offset: -100,
    });

    setNextSection(prevState => ({
      ...prevState,
      sectionUnlocked: true}));
      
  };

  return (
    <div className="box" id="section-one">
      { name.sectionUnlocked ? (
        activityUnlocked ? (
          <div>
            <p>Activity {name.sectionName} : Onsen Relaxation</p>
            <p>Meet : 10.30am @ Joo Koon MRT</p>
            <p>Dress Code : Be comfy get ready to be nakey</p>
            <button onClick={handleClick} className="eightbit-btn-section"> Jom next activity </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              <p>Good morning</p>
              Speaking of birthdays, what's mine:
              <input type="date" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <p></p>
            <button type="submit" className="eightbit-btn-section">Unlock</button>
            <p></p>
            {error && <div className="error">{error}</div>}
          </form>
        )) : (
          <div>
            <img class='locked-section'src='https://drive.google.com/uc?export=view&id=1Vkit4DviTA0TRoRb3OrDy6gIMDks8Hzb' alt='lock'></img>
          </div>
        )
      }
    </div>
  );
};

export default SectionOne;
