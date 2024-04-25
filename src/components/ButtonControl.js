import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const ButtonControl = ({name}) => {

    const {props, post, setPost} = useContext(ThemeContext)
    
    const processBackClick = () => {
        if(post > 0)
            setPost(post-1)
    }
    const processNextClick = () => {
        if(post < props.length-1)
            setPost(post+1)
    }

    const processClick = () =>{
        if (name === "next"){
            processNextClick();
        }
        else{
            processBackClick();
        }
    }

    return(
        <button className="AddCard CastomButton" onClick={processClick}>{name}</button>
    )
}

export default ButtonControl;