// import { Route } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from 'react';
import SectionOne from "./SectionOne.js";
import SectionTwo from "./SectionTwo.js";
import SectionThree from './SectionThree.js';
import Intro from './Intro.js';
import "./App.css";

function App () {
  const [sectionOne, setSectionOne] = useState({sectionName: "One", sectionKey:"1998-06-11", scroll:"section-two", sectionUnlocked: false});
  const [sectionTwo, setSectionTwo] = useState({sectionName: "Two", sectionKey:"91797144", scroll:"section-three", sectionUnlocked: false});
  const [sectionThree, setSectionThree] = useState({sectionName: "Three", sectionKey:"hbdsayang", scroll:"section-end", sectionUnlocked: false});
  return (
    <div className="App-background">
      <Intro nextSection={sectionOne} setNextSection={setSectionOne} ></Intro>
      <p></p>
      <SectionOne name={sectionOne} setNextSection={setSectionTwo}/>
      <p></p>
      <SectionTwo name={sectionTwo} setNextSection={setSectionThree}/>
      <p></p>
      <SectionThree name={sectionThree} />
    </div>
  );
};


export default App;
