import React from "react";
import './header.css'
import img1 from './homeimg.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesm'> React & Node</span>
            <span className='headerTitlelg'> Blog </span>
        </div>
        <img className='headerImg' src={img1} alt=''></img>
    </div>
  )
}
