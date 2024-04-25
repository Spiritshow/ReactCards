import React from "react";
import '../App.css';
import skils from "./dataCards/Skils";
import magic from './dataCards/Magic';

import Reactimg from "./images/reactlogo.png"

const AddNewCard = () =>{
    const AddNewCard = () =>{
        let type = document.querySelector(".type").value;
        let name = document.querySelector(".name").value;
        let description = document.querySelector(".description").value;
        
        switch (type) {
          case "Skils":
            skils.push({heading: type, title: name, description: description, image: Reactimg})
            break;
          case "Magic":
            magic.push({heading: type, title: name, description: description, image: Reactimg})
            break;
          default:
            console.log("Error: Need Skils or Magic");
            break;
        }
        document.querySelector(".type").value = '';
        document.querySelector(".name").value = '';
        document.querySelector(".description").value = '';
    }

    return(
        <div className="CastomAddCard ColorBoxCard ">
            <div className="DerectionCard">
                <p>Тип: <input type="text" className="type"/> &emsp;  
                Название: <input type="text" className="name"/> &emsp;  
                Описание: <input type="text" className="description"/></p>
            </div>
            <button className='AddCard CastomButton' onClick={AddNewCard}>Добавить</button>
        </div>
    )
}

export default AddNewCard;