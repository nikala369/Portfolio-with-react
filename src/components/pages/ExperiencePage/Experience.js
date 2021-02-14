 import React, {useState} from 'react';
 import SvgForExperience from './SvgForExperience';
 import './Experience.css';

 function Experience() {
  return (
   <div className="container experience-content">
       <div className="control-svg">
    <SvgForExperience />
       </div>
       <div className="control-text">
           <p>Working ...</p>
       </div>
   </div>
  );
 }


 export default Experience;
