import React from "react";
import Card from "./Card";

const ListCard = ({props}) =>{

    return  props.map(item => (
        <Card 
            props={item}
        />
    ));
}

export default ListCard;