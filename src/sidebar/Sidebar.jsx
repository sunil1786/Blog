import React from 'react'
import "./sidebar.css"
import img1 from './aboutImg.jpg'
// Import Icons
// import { FaSistrix } from "react-icons/fa";
import { BsInstagram, BsFacebook, BsPinterest} from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";



export default function SideBar() {
    return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span>
            <img className='sidebarImg' src={img1} alt=""></img>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>   
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Cinema</li>

        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon "><BsFacebook/></i>
                <i className="sidebarIcon "><BsInstagram/></i>
                <i className="sidebarIcon "><FaTwitterSquare/></i>
                <i className="sidebarIcon "><BsPinterest/></i>
            </div>

        </div>
    </div>
    )
}
