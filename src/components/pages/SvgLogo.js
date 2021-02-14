import React, {useState, useRef, useEffect} from "react";
import {TweenMax, Power3} from 'gsap';
import './Svg.css';

function Icon1(props) {
  return <g {...props}>
    <path className="rotate-square"
        fill="#073EFF"
        fillOpacity="0.25"
        d="M119.439 14H139.439V34H119.439z"
        transform="rotate(46.214 119.439 14)"
      ></path>
  </g>
  
}

function Icon3(props) {
  return <g {...props}>
      <circle cx="66.5" cy="80.5" r="10.5" fill="#000"></circle>
  </g>
}

function Icon() {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  const handleClicked = () => setClick(!click);

  let logoItem = useRef(null);

  useEffect(() => {
    TweenMax.to(
    logoItem,
    .8,
    {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut
    }
    )
  }, [])

  const Icons = [
    <Icon1 key="Icon-1"/>,
    
    <Icon3 key="Icon-3"/>
  ]
  return (
    <>
    <svg className="svg" 
    onClick={handleClicked}
    ref={el => {logoItem = el}} 
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="120"
      fill="none"
      viewBox="0 0 226 158"
    >
      <path
        stroke="#000"
        strokeWidth="5"
        d="M34.554 156.515L2.554 4.515"
      ></path>
      <path
        stroke="#000"
        strokeWidth="5"
        d="M38.699 2.166L120.699 78.166"
      ></path>
      <path
        stroke="#000"
        strokeWidth="5"
        d="M35.35 154.122L208.35 2.122"
      ></path>
      <Icon1 />
      <circle className={click ? 'circle-moving' : ''}  cx="169.5" cy="77.5" r="10.5" fill="#000"></circle>
      <path className="strike2"
        stroke="#000"
        strokeWidth="3"
        d="M36.581 154.56L225.581 99.56"
      ></path>
      <path className="strike"
        stroke="#000"
        strokeWidth="3"
        d="M224.717 99.473L120.717 79.473"
      ></path>
      <Icon3/>
    </svg>
    </>
  );
}

export default Icon;
