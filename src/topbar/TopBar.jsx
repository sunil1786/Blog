import React from 'react'
import "./topbar.css"
import img1 from './sunil.png'
import { FaSistrix } from "react-icons/fa";
import { BsInstagram, BsFacebook, BsPinterest} from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";


export default function TopBar() {
  return (
    <div className='top'>
        <div className='top-left'>
        <i className="topIcon "><BsFacebook/></i>
        <i className="topIcon "><BsInstagram/></i>
        <i className="topIcon "><FaTwitterSquare/></i>
        <i className="topIcon "><BsPinterest/></i>
        </div>
        <div className='top-center'>
          <ul className='top-list'>
            <li className='topListItem'>Home</li>
            <li className='topListItem'>About</li>
            <li className='topListItem'>Contact</li>
            <li className='topListItem'>Write</li>
            <li className='topListItem'>LogOut</li>
          </ul>
        </div>
        <div className="top-right">
          <img className="topImg" src={img1} alt="Logo"  /> 
          <i className=" searchIcon "><FaSistrix/></i>
        </div>
    </div>
  )
}
