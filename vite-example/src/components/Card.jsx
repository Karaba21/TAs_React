import React from "react";
import "./Card.module.css";


export const Card = ({title, description, assignation, startDate, endDate}) =>{
    return (

        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{assignation}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )
    
}