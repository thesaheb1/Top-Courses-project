import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";


const Card = (props) => {
  let course = props.cardData;
  const  [like, Setlike] = useState(false);
  const likeHandler = ()=>{
    if(!like)
    {
      toast.success("Liked Successfully");
      Setlike(true);
    }
    else{
      toast.error("Liked Removed");
    Setlike(false);
    }
    

  }
  return (
    <div className="w-[300px] h-[370px] flex flex-col justify-start items-center bg-[#F45050] rounded-md drop-shadow-[0_0_5px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] relative transition-all duration-300 ease-linear">
      <img className="w-100 h-[169px] rounded-md " src={course.image.url} alt="" />
      <button className="absolute top-32  -right-2 text-3xl flex justify-center items-center m-4 bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full hover:text-gray-400" 
      onClick={likeHandler}>
       {like ? <FcLike/> : <FcLikePlaceholder/>}
      </button>
        <h2 className="w-100 m-2 self-start text-xl font-bold text-white" >{course.title}</h2>
        <p className="w-100 mx-2 text-left  text-white">{course.description.substring(0,143)}...</p>
    </div>
  );
};

export default Card;
