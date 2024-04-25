import React from "react";
import { useState } from "react";
import Card from "./Card";
import ButtonControl from "./ButtonControl";
import "../App.css";
import ThemeContext from "./context/ThemeContext";


const BoxCard = ({props}) =>{

    const [post, setPost] = useState(0);
    
    return(
        <div className= 'CastomCard ColorBoxCard'>
            <ThemeContext.Provider value={{props, post, setPost}}>
            <ButtonControl name="back"/>
            <div className=' DerectionBoxCard'>
                <h3>{props[0].heading}</h3>
                <Card props={props[post]}/>
            </div>
            <ButtonControl name="next"/>
            </ThemeContext.Provider>
        </div>
    )
}

export default BoxCard;