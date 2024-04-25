import React from "react";
import '../App.css';
import skils from "./dataCards/Skils";
import magic from './dataCards/Magic';

const DelCard = () =>{

    const SearchIndex = (array, value) => {
        let pos = -1
        for (let index = 0; index < array.length; index++) {
          if(array[index].title === value){
            pos = index;
          }
        }
        return(pos)
      }
    
      const ProcessDelCard = () =>{
        let type = document.querySelector(".typeDel").value;
        let name = document.querySelector(".title").value;
      
        switch (type) {
          case "Skils":
            var index = SearchIndex(skils, name);
            console.log(index)
            console.log(skils)
            if (index !== -1) {
              skils.splice(index, 1);
            }
            break;
          
          case "Magic":
            var index = SearchIndex(magic, name);
            if (index !== -1) {
              magic.splice(index, 1);
            }
            break;
          default:
            break;
        }
    
        document.querySelector(".typeDel").value = "";
        document.querySelector(".title").value = "";
      }

    return(
        <div className="CastomAddCard ColorBoxCard ">
            <p>Тип: <input type="text" className="typeDel"/> &emsp;
            Название: <input type="text" className="title"/></p>
            <button className='AddCard CastomButton' onClick={ProcessDelCard}>Удалить</button>
        </div>
    )
}

export default DelCard;