import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import "./Section.css";

const SectionThree = ({ name }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activityUnlocked, setActivityUnlocked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === name.sectionKey ) {
      setError('');
      setActivityUnlocked(true);
    } else {
      setError('come ONnNnnnNnN');
    }
  };
  return (
    <div className="box" id="section-three">
      { name.sectionUnlocked? (
        activityUnlocked ? (
          <div>
            <p>Activity {name.sectionName} : Eat & Craft </p>
            <p>Where : Our Keppel Picnic Spot</p>
            <p>Dress Code : Be comfy and crafty to munchy</p>
            <ScrollLink to={name.scroll} smooth={true}> {name.nextSection} </ScrollLink>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              <p>Good evening</p>
              Time to revise, spell out em letters : 
              <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <p></p>
            {error && <div className="error">{error}</div>}
            <img class='riddle-section' src='https://drive.google.com/uc?export=view&id=1d8xb5Io23sHFUXGvNmjp_odg0coIN5Zl' alt='riddle'></img>
            <p></p>
            <button type="submit" className="eightbit-btn-section">Unlock</button>
          </form>
      )) : (
        <div>
        <img class='locked-section'src='https://drive.google.com/uc?export=view&id=1Vkit4DviTA0TRoRb3OrDy6gIMDks8Hzb' alt='lock'></img>
      </div>
      )}
    </div>
  );
};

export default SectionThree;