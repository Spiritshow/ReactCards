import React from "react";
import"../App.css";

const Card = ({props}) => {
    return(
      <div className='CastomCard ColorCard DerectionCard'>
        <img src={ props.image } className='image' alt='logo'/>
        <div className='CastomTextBox'>
          <h4>
           Название: {props.title}
          </h4>
          <p>
           Описание: {props.description}
          </p>
        </div>
      </div>
      );
}

export default Card;