import React from "react"
import "./post.css";
import postImg from "./postImg.jpg";

export default function  Post() {
  return (
  
     <>
    
     <div className='post'>
        <img className="postImg" src={postImg} alt="" ></img>
      </div> 
     <div className="postInfo">
        <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago </span>
    </div> 
    <p className="postDesc">
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Ullam consequuntur aliquam cumque
     blanditiis voluptatem adipisci reiciendis in labore at.
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
     Delectus neque libero adipisci perferendis facere maiores enim cupiditate ratione
     reprehenderit minima beatae tempore, 
     quibusdam nulla dolores soluta vero nihil, officia provident!
    </p>
    </>
  )
}
