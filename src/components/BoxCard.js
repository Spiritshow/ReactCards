import React from "react";
import ListCard from "./ListCard";
import "../App.css";

const BoxCard = ({props}) =>{
    return(
        <div className='CastomCard ColorBoxCard DerectionBoxCard'>
            <h3>{props[0].heading}</h3>
            <ListCard props = {props}/>
        </div>
    )
}

export default BoxCard;